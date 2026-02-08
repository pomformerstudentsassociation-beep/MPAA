let english = true;

function switchLang(){
  const title = document.getElementById("title");
  const rulesTitle = document.getElementById("rulesTitle");
  const rules = document.getElementById("rules");
  const btn = document.getElementById("langBtn");

  if(english){
    title.innerText = "Dokoki da Ka’idojin Ƙungiyar Tsofaffin Dalibai";
    rulesTitle.innerText = "Dokoki";
    rules.innerHTML = `
      <li>Idan za a yi muhimmin sanarwa ko shiri, za a rufe group ɗin na tsawon lokacin sanarwar ko shirin, muddin bai wuce minti talatin ba.</li>
      <li>Babu admin da yake da izinin goge saƙon wani sai idan saƙon ya ƙunshi abubuwan da ba su dace ba.</li>
      <li>Duk memban da aka gayyata zuwa biki, karatun Al‑Kur’ani ko taro, ya sake wallafa katin gayyata cikin mako guda don kauce wa mantuwa.</li>
    `;
    btn.innerText = "English";
  } else {
    title.innerText = "School / Alumni Association Rules";
    rulesTitle.innerText = "Rules & Regulations";
    rules.innerHTML = `
      <li>If an important announcement or program is to be made, the group will be closed for the duration of the event or announcement, provided it does not exceed thirty minutes.</li>
      <li>No administrator is allowed to delete another person’s message unless it contains inappropriate content such as profanity or offensive material.</li>
      <li>Any member invited to a wedding, Qur’an recitation, or party should repost the invitation card within one week to avoid forgetting.</li>
    `;
    btn.innerText = "Hausa";
  }
  english = !english;
}
