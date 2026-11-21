# Site da Assembleia de Deus Missão em Monte Alegre – PA

Site estático (HTML, CSS e JavaScript). Não precisa instalar nada.

## Arquivos
- `index.html`: estrutura da página
- `style.css`: visual
- `script.js`: programação da semana, congregações, notícias e inscrições
- `noticias.js`: **as notícias** (edite aqui para publicar novas)
- `imagens/`: fotos, brasões e cartazes

## Publicar no GitHub Pages
1. Crie um repositório público e envie todos os arquivos (com `index.html` na raiz).
2. Settings → Pages → Branch `main`, pasta `/ (root)` → Save.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Publicar uma notícia
1. Envie as fotos para a pasta `imagens/`.
2. Abra `noticias.js` e copie um bloco `{ ... }` existente, colando-o no topo da lista (separe os blocos com vírgula).
3. Troque os textos. `data` usa o formato AAAA-MM-DD; `dataFim` é opcional.
4. Em `fotos`, coloque os caminhos, por exemplo `"imagens/minha-foto.webp"`. A primeira foto vira a capa.
5. Campos opcionais: `local`, `versiculo` ({t, r}), `temas` (lista) e `cartaz`.

## Abrir inscrições para um evento
No final de `script.js` há a lista `EVENTOS`. Enquanto estiver vazia, o site mostra "Nenhuma inscrição aberta no momento". Para abrir:

```js
var EVENTOS=[
 {tipo:"Evento", data:"20 e 21 de dezembro", titulo:"Nome do evento", texto:"Resumo curto.", link:"https://link-do-formulario"}
];
```
Para encerrar, deixe a lista de novo como `var EVENTOS=[];`.

## Endereço próprio (ex.: admontealegre.com.br)
1. Registre o domínio (no Registro.br para `.com.br`).
2. No GitHub: Settings → Pages → Custom domain → digite o domínio → Save, e marque **Enforce HTTPS**.
3. No painel do domínio, crie estes registros DNS:
   - 4 registros **A** para `@` apontando para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`
   - 1 registro **CNAME** para `www` apontando para `SEU-USUARIO.github.io`
4. Aguarde a propagação (de minutos a 24 h). O GitHub cria o arquivo `CNAME` sozinho.

## Contato da igreja
Telefone (93) 99146-7141 · ieadma50@gmail.com · Instagram @admontealegrepa
