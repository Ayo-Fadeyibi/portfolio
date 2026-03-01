function downloadResume() {
    const btn = document.querySelector('.download-btn');
    btn.textContent = 'Preparing...';

    // Use print dialog which allows save as PDF
    setTimeout(() => {
      window.print();
      btn.innerHTML = `<svg viewBox="0 0 24 24" style="width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF`;
    }, 150);
}