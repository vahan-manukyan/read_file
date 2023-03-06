const f = ["file1.txt", "file2.txt", "file3.txt"]
const arr = []

function loadFiles(files, callback) {
    files.map((file) => {
        readFile(file, (x) => {
            arr.push(x)
        })
    })

    callback(arr)
}

function readFile(file, callback){
    setTimeout(() => {
        callback("Content of " + file)
    }, 1000)
}

loadFiles(f, (results) => {
    console.log(results)
})
