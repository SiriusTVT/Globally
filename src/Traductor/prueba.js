const res = await fetch("http://127.0.0.1:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: "Hello!",
      source: "en",
      target: "es"
    }),
    headers: { "Content-Type": "application/json" }
  });
  
  console.log(await res.json());