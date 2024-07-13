document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('seoChecklistResults', (data) => {
      const results = data.seoChecklistResults || {};
      const resultsContainer = document.getElementById('results');
  
      Object.keys(results).forEach(key => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
          <h2>${key.replace(/-/g, ' ')}</h2>
          <div class="${results[key] ? 'passed' : 'failed'}">${results[key] ? 'Passed' : 'Failed'}</div>
          <button onclick="toggleDetails('${key}')">Toggle Details</button>
          <div id="${key}-details" style="display: none;">Detailed information about ${key.replace(/-/g, ' ')}</div>
        `;
        resultsContainer.appendChild(item);
      });
    });
  });
  
  function toggleDetails(key) {
    const details = document.getElementById(`${key}-details`);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  }
  