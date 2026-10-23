# Conecta Social — Plataforma demonstrativa para ONGs

Projeto acadêmico de interface web responsiva usando HTML5, CSS3 e JavaScript básico.

## Como executar
1. Baixe e extraia a pasta `conecta-social`.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` no navegador ou use a extensão Live Server.
4. Navegue entre Início, Projetos, Voluntariado e Doações.

## Estrutura
- `index.html`: página inicial
- `projetos.html`: catálogo de projetos e categorias
- `voluntariado.html`: formulário de interesse em voluntariado
- `doacoes.html`: formulário demonstrativo de doação
- `css/variables.css`: design system, paleta, tipografia e espaçamentos
- `css/base.css`: reset, tipografia e estilos globais
- `css/layout.css`: estrutura de páginas, CSS Grid e Flexbox
- `css/components.css`: botões, cards, badges, formulários, feedback
- `css/responsive.css`: breakpoints e layouts responsivos
- `js/main.js`: menu mobile e validação/feedback demonstrativos
- `img/`: pasta para imagens locais do projeto

## Requisitos atendidos
- Variáveis CSS para cores, tipografia, espaçamento, raios e sombras.
- Mais de 8 cores no design system.
- Escala tipográfica com 10 tamanhos.
- Espaçamento modular de 8, 16, 24, 32, 48 e 64 px.
- Layout geral em CSS Grid e componentes com Flexbox.
- Grid customizado de 12 colunas disponível abaixo.
- Cinco breakpoints: 1200px, 992px, 768px, 576px e 380px.
- Menu dropdown com hover/foco e navegação hambúrguer em telas pequenas.
- Cards, badges, tags, botões com estados, formulários e feedback visual.
- Acessibilidade básica: landmarks semânticos, textos alternativos, skip link, foco visível, labels e respeito a `prefers-reduced-motion`.

## Grid de 12 colunas
A classe utilitária abaixo pode ser aplicada a qualquer contêiner:
```html
<div class="grid-12">
  <div class="col-span-6">Conteúdo de meia largura</div>
  <div class="col-span-6">Outro conteúdo de meia largura</div>
</div>
```

## Observações importantes
- As imagens de exemplo são carregadas do Unsplash pela internet. Para uma entrega totalmente autocontida, baixe imagens com licença apropriada e salve-as em `img/`, atualizando os caminhos.
- Os formulários são somente demonstrativos: não enviam dados para servidor e não processam pagamentos.
- Para uso real, seria necessário backend, banco de dados, autenticação, política de privacidade e integração segura com um provedor de pagamentos.
- Antes de entregar, revise o conteúdo com as exigências específicas do professor e publique o projeto em um repositório público do GitHub.
