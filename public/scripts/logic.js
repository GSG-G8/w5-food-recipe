searchBtn.onclick = () => {
    fetch('/search', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: searchInput.value,
        })
      })
      .then(res => res.json())
      .then(console.log);
}
