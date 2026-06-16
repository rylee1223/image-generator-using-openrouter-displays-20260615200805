# OpenRouter Image Generator

A clean, responsive, dark‑mode‑first web app that lets users generate images using **OpenRouter’s free AI models**.  
The demo uses a placeholder image service (picsum.photos) to simulate generation – replace the `generateImage` function in *script.js* with a real OpenRouter request when you have an API key.

## Features

- **Dark mode default** – no light‑mode toggle, using CSS custom properties.
- Mobile‑first, responsive layout with semantic HTML5.
- Image generation UI:
  - Prompt textarea
  - Model dropdown (four free models)
  - Generate button with animated spinner
  - Preview area with download button
- Model catalog page describing each free model.
- FAQ section built with native `<details>` accordion.
- Subtle CSS transitions & animations for a professional feel.

## Project Structure

```
/ (root)
│
├─ index.html      # Main page, links to CSS & JS
├─ styles.css      # Dark‑mode theme, layout, animations
├─ script.js       # UI logic, mock image generation
└─ README.md       # This file
```

## Setup & Usage

1. **Clone / download** the repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. Fill in a prompt, select a model, and click **Generate**.
4. A placeholder image appears; click **Download** to save it.

### Integrating the real OpenRouter API

Replace the `generateImage` function in `script.js` with a fetch call to OpenRouter’s image generation endpoint. Example skeleton:

```js
const generateImage = async (prompt, model) => {
    const response = await fetch('https://openrouter.ai/api/v1/generate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_API_KEY`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model,
            prompt,
            // any other required parameters
        })
    });

    const data = await response.json();
    // Assuming the API returns a URL to the generated image:
    return data.image_url;
};
```

Make sure to handle CORS or use a backend proxy if needed.

## Development Notes

- **CSS Custom Properties** enable easy theme tweaks. All colors, spacing, and transition durations are defined at the top of `styles.css`.
- The **spinner** is a pure‑CSS animated circle.
- The preview image fades in with `@keyframes fadeIn`.
- Accessibility: form controls have associated `<label>` elements, buttons are focusable, and the FAQ uses native `<details>` for keyboard friendliness.

## License

This project is released under the MIT License. Feel free to modify, enhance, or integrate it into your own applications.