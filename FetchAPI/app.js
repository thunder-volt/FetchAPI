
getdata();
var root = document.createElement('div');

function getdata() {
    fetch('https://retoolapi.dev/PNAOH1/data')
        .then(response => response.json())
        .then(data => {
            JSON.stringify(data);
            document.body.append(root);
            for (let i = 0; i < 51; i++) {
                var div = document.createElement("div");
                div.innerHTML = `${Object.values(data[i])}`;
                root.appendChild(div);
            }
            console.log(data)
        }
        )
}

root.className = "body";
