document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const toggleSkillsBtn = document.getElementById('toggle-skills');
    const skillsList = document.getElementById('skills-list');

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        themeIcon.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    }

    toggleSkillsBtn.addEventListener('click', () => {
        skillsList.classList.toggle('hidden');
        toggleSkillsBtn.textContent = skillsList.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
        updateThemeIcon();
    }
});