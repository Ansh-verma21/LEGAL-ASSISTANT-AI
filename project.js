function showSection(sectionId) {
            
    var sections = document.querySelectorAll('.d1, .d2, .d3, .d4');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    

    var selectedSection = document.querySelector('.' + sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}