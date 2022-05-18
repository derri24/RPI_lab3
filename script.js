//https://developer.mozilla.org/ru/search?q=URL

async function getData() {
    let addr = new URL("https://iis.bsuir.by/api/v1/schedule?studentGroup=051007");
    const res = await fetch(addr);
    const data = await res.json();
    console.log(data);
}

function getPropertiesURL() {
    let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
    console.log("URL: " + addr);
    let protocol = addr.protocol;
    let host = addr.host;
    let path = addr.pathname;
    console.log("port: " + protocol);
    console.log("host: " + host);
    console.log("path: " + path);
}

function changeURL() {
    let myUsername = "someguy";
    let addr = new URL("https://example.com/login");
    console.log("URL: " + addr);
    addr.username = myUsername;
    console.log("modified URL: " + addr);
}

function request() {
    let addr = new URL("https://example.com/login?user=someguy&page=news");
    try {
        console.log(addr.searchParams.get("user"));
        console.log(addr.searchParams.get("page"));
    } catch (err) {
        alert(err);
    }
}

function workWithSearchParams() {
    let paramStr = 'mood=good&color=green&day=first';
    console.log("string: " + paramStr);
    let searchParams = new URLSearchParams(paramStr);
    searchParams.append('topic', 'summer');
    console.log("string after append: " + searchParams.toString());

    searchParams.set('topic', 'spring');
    console.log("string after set: " + searchParams.toString());

    searchParams.delete('day');
    console.log("string after delete: " + searchParams.toString());

    console.log("has day: " + searchParams.has('day'));
    searchParams.sort();
    console.log("string after sort: " + searchParams.toString());

    let paramsObj = {foo: 'bar', baz: 'bar'};
    let searchParams1 = new URLSearchParams(paramsObj);
    searchParams1.toString();                 // "foo=bar&baz=bar"
    searchParams1.has('foo');           // true
    searchParams1.get('foo');                 // bar
}

