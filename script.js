
var $=function(s){return document.querySelector(s)},h=new Date().getDay();
var D=[[1,'Segunda-feira','Exclusivamente para a família',[]],[2,'Terça-feira','Culto de ensino e ensaios',[['1º','Culto de ensino'],['2º','Ensaio'],['3º','Ensaio'],['4º','Ensaio'],['5º','Ensaio']]],[3,'Quarta-feira','Exclusivamente para o grupo familiar',[]],[4,'Quinta-feira','Cultos da quinta-feira',[['1º','Culto das crianças'],['3º','Jovens e adolescentes'],['4º','Culto de ensino'],['5º','Louvor, ação de graças e aniversários']]],[5,'Sexta-feira','Cultos de ensino no Templo Central',[['1ª','Santa Ceia'],['2ª','Família'],['3ª','Solidariedade'],['4ª','Acolhimento']]],[6,'Sábado','A critério',[]],[0,'Domingo','Cultos de domingo',[['1º','Culto de missões'],['2º','Culto evangelístico'],['3º','Culto da família']]]];
$('#wk').innerHTML=D.map(function(o){return'<article class="card'+(o[0]==h?' hj':'')+'"><small>'+o[1]+(o[0]==h?' · hoje':'')+'</small><h3>'+o[2]+'</h3>'+(o[3].length?'<ol>'+o[3].map(function(x){return'<li><b>'+x[0]+'</b><span>'+x[1]+'</span></li>'}).join('')+'</ol>':'')+'</article>'}).join('');
var N=[['Visita','21 de outubro de 2026','Visita do presidente da COMIEADEPA','A igreja recebeu a visita do presidente da convenção estadual, Pr. Océlio Nauar.','imagens/imagem-10.webp'],['Evento','16 e 17 de novembro de 2026','Formação de Obreiros','Dois dias de ensino para preparar servos para a obra.','imagens/imagem-11.webp']];
$('#nf').innerHTML=N.map(function(n){return'<article class="card"><img src="'+n[4]+'" alt="'+n[2]+'"><small>'+n[0]+' · '+n[1]+'</small><h3>'+n[2]+'</h3><p>'+n[3]+'</p></article>'}).join('');
var A=['Paraíso,Adonay Shalon,Rosa Saron,Betesda,Nova Galiléia','Nova Jerusalém,Monte Tabor,Nova Canaã,Betel,Nova Sião,Monte Sinai','Nova Betânia,Jeová Samá,Lírio dos Vales,Monte Gerezim,Cafarnaum,Monte Horebe','Vale de Savé,Monte das Oliveiras,Novo Horizonte,Peniel,Emanuel,Fonte de Vida','Filadélfia,Rio Quebar,Refúgio Eterno,Manancial de Bênçãos,Vereda dos Justos','Ebenézer,Maanaim,Orvalho de Hermon,Monte Carmelo','Porta da Fé,Macedônia,Maranata,Jeová Nissi,Jardim de Deus'],C=[{n:'Templo Central',s:'Sede'}],ar=0;
A.forEach(function(s,i){s.split(',').forEach(function(n){C.push({n:n,s:'Área '+(i+1),a:i+1})})});
function rc(){var q=$('#q').value.toLowerCase().trim();$('#gr').innerHTML=C.filter(function(c){return(!ar||!c.a||c.a==ar)&&c.n.toLowerCase().indexOf(q)>-1}).map(function(c){return'<div class="card"><small>'+c.s+'</small><br><b>'+c.n+'</b></div>'}).join('')}
$('#ab').innerHTML=['Todas',1,2,3,4,5,6,7].map(function(a,i){return'<button data-a="'+i+'" aria-pressed="'+(i==0)+'">'+(i?'Área '+a:a)+'</button>'}).join('');
document.querySelectorAll('#ab button').forEach(function(b){b.onclick=function(){ar=+b.dataset.a;document.querySelectorAll('#ab button').forEach(function(d){d.setAttribute('aria-pressed',d==b)});rc()}});$('#q').oninput=rc;rc();



(function(){var T=[
"A UAADMA acolhe os adolescentes da igreja em um ambiente alegre e seguro, onde eles aprendem a Palavra de Deus, fazem amizades verdadeiras e descobrem como viver a fé desde cedo. Por meio de estudos, atividades e momentos de comunhão, os adolescentes são incentivados a crescer em caráter e a servir ao Senhor.",
"A UMADMA reúne os jovens da igreja para adorar, estudar a Bíblia e servir. Com louvor, comunhão e compromisso com a obra de Deus, a mocidade se prepara para ser luz na família, na igreja e na sociedade.",
"A USEADMA, os Arautos do Rei, reúne os homens da igreja em torno da Palavra, da oração e do serviço. Seu propósito é fortalecer a fé, a comunhão e a liderança cristã dos senhores, abençoando suas famílias e a obra de Deus em Monte Alegre.",
"O Departamento de Anciões reúne os anciões que servem à igreja com cuidado, conselho e exemplo. Seu lema é servir a Deus, ao Seu povo e à Sua obra, conforme 1 Pedro 5:2, apoiando a liderança e acompanhando de perto a vida da igreja.",
"O Círculo de Oração Heroínas de Cristo reúne as irmãs da igreja para orar, interceder e crescer juntas na fé. É um espaço de comunhão e fortalecimento espiritual, onde a oração sustenta famílias, a igreja e a obra de Deus.",
"A UCADMA ensina as crianças das Assembleias de Deus de Monte Alegre a conhecer a Bíblia e a amar a Jesus desde pequenas. Com atividades, histórias e muita alegria, ela ajuda a formar a nova geração da igreja nos caminhos do Senhor."];
var d=document.getElementById('dm');function op(c,i){d.querySelector('#dmi').src=c.querySelector('img').src;d.querySelector('#dmi').alt=c.querySelector('img').alt;d.querySelector('#dml').textContent=c.querySelector('small').textContent;d.querySelector('#dmt').textContent=c.querySelector('h3').textContent;d.querySelector('#dmf').textContent=c.querySelector('p').textContent;d.querySelector('#dmd').textContent=T[i]||'';d.showModal()}
document.querySelectorAll('#dep .dep').forEach(function(c,i){c.tabIndex=0;c.setAttribute('role','button');c.insertAdjacentHTML('beforeend','<em class="mo">Saiba mais &rarr;</em>');c.onclick=function(){op(c,i)};c.onkeydown=function(e){if(e.key=='Enter'||e.key==' '){e.preventDefault();op(c,i)}}});
d.querySelectorAll('.dm-x,.dm-b').forEach(function(b){b.onclick=function(){d.close()}});d.onclick=function(e){if(e.target===d)d.close()};
})();



/* Inscrições: para abrir um evento, adicione um item em EVENTOS. Ex.: {tipo:"Evento",data:"20 e 21 de dezembro",titulo:"Nome do evento",texto:"Resumo curto.",link:"https://..."} */
var EVENTOS=[];
(function(){if(!EVENTOS.length)return;document.getElementById('vz').style.display='none';var g=document.getElementById('evs');g.style.display='grid';g.innerHTML=EVENTOS.map(function(e){return'<article class="card ev"><small>'+e.tipo+' · '+e.data+'</small><h3>'+e.titulo+'</h3><p>'+e.texto+'</p><a class="btn" href="'+e.link+'" target="_blank" rel="noopener">Fazer inscrição</a></article>'}).join('')})();
