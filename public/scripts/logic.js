searchBtn.onclick = () => {
    const text = searchInput.value.trim();
    console.log(text)
    if (text !== "") {
        fetch('/search', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: text,
            })
          })
          .then(res => res.json())
          .then(res => renderSearch(res.hits));
    } else {
        searchInput.style.borderColor = "#f00";
        searchInput.style.backgroundColor = "#faa";
    }
}
