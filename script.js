/**
 * script.js – Handles image generation UI logic.
 * No external dependencies; works in all modern browsers.
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gen-form');
    const generateBtn = form.querySelector('.generate-btn');
    const btnText = generateBtn.querySelector('.btn-text');
    const spinner = generateBtn.querySelector('.spinner');
    const previewArea = document.getElementById('preview-area');
    const resultImg = document.getElementById('result-image');
    const downloadBtn = document.getElementById('download-btn');

    // Simulate image generation using Picsum (replace with real API later)
    const generateImage = async (prompt, model) => {
        // Encode prompt to create a deterministic seed
        const seed = encodeURIComponent(prompt.trim()).substring(0, 20);
        // Using model name to diversify the seed a bit
        const modelKey = model.split('/').pop();
        const url = `https://picsum.photos/seed/${seed}-${modelKey}/800/600`;
        // Simulate network latency
        await new Promise(res => setTimeout(res, 1500));
        return url;
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI: show spinner, disable button
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
        generateBtn.disabled = true;

        const prompt = form.prompt.value;
        const model = form.model.value;

        try {
            const imageUrl = await generateImage(prompt, model);
            resultImg.src = imageUrl;
            resultImg.alt = `Generated image for: ${prompt}`;
            previewArea.classList.remove('hidden');
            downloadBtn.href = imageUrl;
        } catch (err) {
            alert('Something went wrong while generating the image.');
            console.error(err);
        } finally {
            // UI: hide spinner, enable button
            spinner.classList.add('hidden');
            btnText.classList.remove('hidden');
            generateBtn.disabled = false;
        }
    });
});