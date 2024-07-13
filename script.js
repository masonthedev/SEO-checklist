document.addEventListener('DOMContentLoaded', () => {
    const checklistItems = document.querySelectorAll('.checklist-item input');
  
    checklistItems.forEach(item => {
      item.addEventListener('change', () => {
        updateResults();
      });
    });
  
    function updateResults() {
      const results = [];
      checklistItems.forEach(item => {
        const result = {
          id: item.id,
          checked: item.checked
        };
        results.push(result);
      });
  
      // Send the results to your server or display them in the UI
      console.log(results);
    }
  });
  