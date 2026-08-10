(() => {
  const style = document.createElement('style');
  style.id = 'sports-fiesta-mobile-beaker-fit-v1';
  style.textContent = `
  @media (max-width:700px) and (orientation:portrait){
    /* Keep all measuring beakers visible at once on a phone. */
    .measureWrap{
      flex:0 0 205px !important;
      min-height:205px !important;
      max-height:205px !important;
      padding:3px !important;
      overflow:hidden !important;
    }
    .scene{
      width:100% !important;
      height:100% !important;
      min-height:0 !important;
      overflow:hidden !important;
    }
    .scene > div{
      max-width:100% !important;
      gap:2px !important;
    }
    /* renderScene() uses this inline flex-wrap row for the beakers. */
    .scene div[style*="flex-wrap:wrap"]{
      width:100% !important;
      flex-wrap:nowrap !important;
      justify-content:center !important;
      align-items:flex-end !important;
      gap:4px !important;
    }
    .scene div[style*="align-items:flex-end"]{
      min-width:0 !important;
      flex:0 1 auto !important;
    }
    .scene div[style*="align-items:flex-end"] > svg{
      width:min(28vw,112px) !important;
      height:auto !important;
      max-height:145px !important;
      display:block !important;
    }
    /* The heading above the beakers should not consume valuable phone height. */
    .scene div[style*="font-size:18px"]{
      font-size:13px !important;
      line-height:1.1 !important;
    }
    .questionCard{padding:6px !important;}
    #question{font-size:18px !important;margin:4px 0 !important;}
    .helper{font-size:11px !important;padding:4px 8px !important;line-height:1.2 !important;}
    .answerArea{margin-top:4px !important;}
    .answerWrap{gap:6px !important;}
    .answerInput{width:84px !important;height:40px !important;}
    .answerLabel{font-size:11px !important;line-height:1.15 !important;}
    .actions{margin-top:5px !important;}
    .action{padding:8px 16px !important;font-size:16px !important;}
  }
  @media (max-width:390px) and (orientation:portrait){
    .scene div[style*="align-items:flex-end"] > svg{
      width:27vw !important;
      max-height:136px !important;
    }
  }
  `;
  document.head.appendChild(style);
})();
