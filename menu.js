async function loadChapter(chapter) {
    let titleElements = document.getElementsByName("title");
    let contentElement = document.getElementById("content");

    let chapterJSON = await getChapterJSON(chapter);

    titleElements.forEach(titleElement => {
        titleElement.innerHTML = chapterJSON.title;
    })

    contentElement.innerHTML = chapterJSON.content;
}

function getChapterJSON(chapter) {
    return new Promise(resolve => {
        let extension = ".json";
        let request = new XMLHttpRequest();
        request.open("GET", "./Chapters/"+chapter+extension);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(request.responseText));
            }
        };
        request.send();
    });
}