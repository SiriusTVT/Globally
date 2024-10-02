const res = await fetch("http://127.0.0.1:5000/translate", {
	method: "POST",
	body: JSON.stringify({
		q: "Hello, how are you?",
		source: "auto",
		target: "es",
		format: "text",
		alternatives: 3,
		api_key: ""
	}),
	headers: { "Content-Type": "application/json" }
});

console.log(await res.json());

// libretranslate --disable-web-ui
