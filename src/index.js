const textArea = `
    <button id="submit">Click here</button><br>
    <div id="redirectedUrls" style="width:50%;" hidden>
    </div>
    <div class="wrapper" style="width:100%; display:flex;">
        <div id="responses" style="width:50%;"></div>
        <textarea id="expected" style="width:50%; height:auto%;" placeholder="expected links"></textarea>
    </div>
    <div id="result" style="width:100%;">
        <p>RESULTS:</p>
    </div>
    </div>`

document.getElementById('root').innerHTML = textArea, textArea;

const newParagraph = (copy, parentElId) => {
    let text = document.createElement('p');
    text.classList.add('response__url');
    let content = document.createTextNode(copy);
    text.appendChild(content);
    document.getElementById(parentElId).appendChild(text);
}

const createActualUrlArr = () => {
    let actualArr = [];
    document.querySelectorAll('.response__url').forEach(el => {
        actualArr.push(el.innerText);
    })
    return actualArr;
}

const createExpectedUrlArr = (() => {
    let expectedArr = document.getElementById('expected').value.split('\n');
    return expectedArr;
})




window.addEventListener('load', () => {
    navigator.clipboard.readText().then(clipText => {
        // document.querySelector('#hiddenTextarea').value = clipText;
        let text = document.createElement('p');
        text.id = "rawLinks"
        let content = document.createTextNode(clipText);
        text.appendChild(content);
        document.getElementById('redirectedUrls').appendChild(text);
        }
    ).then(() => {
        let initalLinks = document.getElementById('rawLinks').innerText;
        initalLinks = initalLinks.split(',');
        let linksObj = {};
        let allLinks = [];

        initalLinks.forEach((link, index) => {
            if(index === 0 || index % 2 === 0) {
                linksObj.name = link;
            }
            else {
                linksObj.ogUrl = link;
                allLinks.push(linksObj);
                linksObj = {}
            }
        })

        let allPromises = [];
        var responseUrls = [];
        allLinks.forEach(link => {
            allPromises.push(fetch(link.ogUrl));
        })
        console.log(allPromises);
        Promise.all(allPromises)
        .then(responses => {
            responses.forEach((response, index) => {
                // console.log(response.url)
                responseUrls.push(response.url)
                allLinks[index].responseStatus = response.status;
                allLinks[index].responseUrl = response.url;
                allLinks[index].baseUrl = allLinks[index].responseUrl.split('?')[0];
                if(allLinks[index].responseUrl.split('?')[1] === undefined) {
                    allLinks[index].utmParams = 'noParams';
                }
                else {
                    allLinks[index].utmParams = allLinks[index].responseUrl.split('?')[1];
                }
            })
            console.log(allLinks);
        })
        .catch(error => console.log(`error: ${error}`));
    })
})

document.getElementById('submit').addEventListener('click', () => {
    let expectedArr = createExpectedUrlArr();
    let actualArr = createActualUrlArr();
    console.log(expectedArr);
    console.log(actualArr);
    expectedArr.forEach((url, index) => {
        newParagraph(url, 'result');
        newParagraph(actualArr[index], 'result');
        if(url === actualArr[index]) {
            newParagraph('PASS', 'result');
        }
        else {
            newParagraph('FAIL', 'result');
        }
    })
})

// document.getElementById('submit').addEventListener('click', () => {
//     let initalLinks = document.getElementById('rawLinks').innerText;
//     initalLinks = initalLinks.split(',');
//     let allPromises = [];
//     let responseUrls = [];
//     initalLinks.forEach(link => {
//         allPromises.push(fetch(link));
//     })
//     console.log(allPromises);
//     Promise.all(allPromises)
//     .then(responses => {
//         responses.forEach(response => {
//             console.log(response.url)
//             responseUrls.push(response.url)
//             newParagraph(response.url)
//         })
//     })
//     .catch(console.log('No response received'))

    // initalLinks.forEach(link => {
    //     allPromises.push(link);
    // })

    // Promise.all(allPromises.map(url => {
    //     fetch(url)
    //     .then(response => {
    //         responseUrls.push(response.url);
    //         console.log(responseUrls);
    //     })
    //     .catch(console.log('No response received'));
    // }))
    // .then(responses => {
    //     console.log(`URL count: ${responses.length}`)
    // })
// })