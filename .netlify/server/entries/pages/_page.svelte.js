import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const button_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".btn.svelte-u5lh12{padding:20px 43px;text-decoration:none;background-color:#e5d75c;color:#273549;border-radius:7px;transition:transform 600ms ease-in-out;display:block;width:fit-content;margin-top:40px;display:flex;justify-content:center;align-items:center;box-sizing:border-box}.btn.svelte-u5lh12:hover{transform:translateY(5px);transition:transform 200ms ease-in-out}.btn--alternate.svelte-u5lh12{background-color:initial;border:3px #e2e55c solid;color:white}.small.svelte-u5lh12{padding:7px;width:118px;margin-top:10px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { IsAlternate = false } = $$props;
  let { message } = $$props;
  let { link } = $$props;
  let { isSmall = false } = $$props;
  if ($$props.IsAlternate === void 0 && $$bindings.IsAlternate && IsAlternate !== void 0)
    $$bindings.IsAlternate(IsAlternate);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.isSmall === void 0 && $$bindings.isSmall && isSmall !== void 0)
    $$bindings.isSmall(isSmall);
  $$result.css.add(css$6);
  return `<a${add_attribute("href", link, 0)} class="${escape(IsAlternate ? "btn btn--alternate" : "btn", true) + escape(isSmall ? " small" : " ", true) + " svelte-u5lh12"}">${escape(message)}</a>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'nav.svelte-ftjclu{display:flex;align-items:center;justify-content:space-between;padding:1px}.logo--link.svelte-ftjclu{text-transform:uppercase;font-family:"Oswald", sans-serif;box-sizing:border-box;margin-left:7px;color:#242a3f;font-size:1.2rem}ul.svelte-ftjclu{display:flex;list-style:none;gap:20px;justify-content:flex-end;padding:20px;align-items:center;margin:0}a.svelte-ftjclu{text-decoration:none}header.svelte-ftjclu{background-color:#e5d75c}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<header class="svelte-ftjclu"><nav class="svelte-ftjclu"><a class="logo--link svelte-ftjclu" href="">Jarle.dev</a>
    <ul class="svelte-ftjclu"><li><a href="" class="svelte-ftjclu">Home</a></li>
      <li><a href="" class="svelte-ftjclu">Projects</a></li>
      <li><a href="" class="svelte-ftjclu">Contact</a></li>
      <li><a href="" class="svelte-ftjclu">About</a></li></ul></nav>
</header>`;
});
const card_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".svelte-fpshb5{margin:0;padding:0;border:none}.button--container.svelte-fpshb5{display:flex;justify-content:space-between}h3.svelte-fpshb5{color:#e5d75c}.card.svelte-fpshb5{padding:14px 11px;margin-block:20px;color:white;border-radius:12px;display:flex;flex-direction:column;width:256px;box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;background:rgb(36 42 63)}.type.svelte-fpshb5{color:#9cccf9;line-height:0.3;font-size:0.7rem}.desc.svelte-fpshb5{color:#9cccf9;height:124px;overflow:hidden}img.svelte-fpshb5{margin:7px 0;height:215px;border-radius:12px;width:257px;object-fit:cover}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imgURL } = $$props;
  let { imgAlt } = $$props;
  let { projectDesc } = $$props;
  let { title } = $$props;
  let { projectType } = $$props;
  let { siteUrl } = $$props;
  let { githubUrl } = $$props;
  if ($$props.imgURL === void 0 && $$bindings.imgURL && imgURL !== void 0)
    $$bindings.imgURL(imgURL);
  if ($$props.imgAlt === void 0 && $$bindings.imgAlt && imgAlt !== void 0)
    $$bindings.imgAlt(imgAlt);
  if ($$props.projectDesc === void 0 && $$bindings.projectDesc && projectDesc !== void 0)
    $$bindings.projectDesc(projectDesc);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.projectType === void 0 && $$bindings.projectType && projectType !== void 0)
    $$bindings.projectType(projectType);
  if ($$props.siteUrl === void 0 && $$bindings.siteUrl && siteUrl !== void 0)
    $$bindings.siteUrl(siteUrl);
  if ($$props.githubUrl === void 0 && $$bindings.githubUrl && githubUrl !== void 0)
    $$bindings.githubUrl(githubUrl);
  $$result.css.add(css$4);
  return `<div class="card svelte-fpshb5"><div class="svelte-fpshb5"><p class="type svelte-fpshb5">${escape(projectType)}</p>
    <h3 class="svelte-fpshb5">${escape(title)}</h3></div>
  <img${add_attribute("src", imgURL, 0)}${add_attribute("alt", imgAlt, 0)} class="svelte-fpshb5">
  <p class="desc svelte-fpshb5">${escape(projectDesc)}</p>
  <div class="button--container svelte-fpshb5">${validate_component(Button, "Button").$$render(
    $$result,
    {
      isSmall: "true",
      width: "20px",
      message: "Live Site",
      link: siteUrl
    },
    {},
    {}
  )}
    ${validate_component(Button, "Button").$$render(
    $$result,
    {
      isSmall: "true",
      IsAlternate: "true",
      message: "Github",
      link: githubUrl
    },
    {},
    {}
  )}</div>
</div>`;
});
const cardList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1iq9c37{display:flex;flex-wrap:wrap;justify-content:center;gap:34px}",
  map: null
};
const CardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="svelte-1iq9c37">${slots.default ? slots.default({}) : ``}
</div>`;
});
const contactinfo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "p.svelte-1lfgerd{font-size:1.7rem}",
  map: null
};
const Contactinfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div><p class="number svelte-1lfgerd"><i class="fa-solid fa-square-phone"></i>450 46 326</p>
  <p class="email svelte-1lfgerd"><i class="fa-solid fa-square-envelope"></i>jarlehtollaksen2@live.no
  </p>
</div>`;
});
const form_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-7qjmyn{display:flex;flex-direction:column;max-width:300px}button.svelte-7qjmyn{padding:10px;text-decoration:none;background-color:#e5d75c;color:#273549;border-radius:7px;transition:transform 600ms ease-in-out;display:block;margin-top:5px;display:flex;justify-content:center;align-items:center;border:none;box-sizing:border-box;width:50%}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form action="" class="svelte-7qjmyn"><label for="email">Email</label>
  <input type="text" name="email" id="email">
  <label for="message">Message</label>
  <textarea name="message" id="message" cols="30" rows="10"></textarea>
  <button class="svelte-7qjmyn">Send</button>
</form>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.p--bigger.svelte-1e9bsw4{font-size:1.2rem}.text--container.svelte-1e9bsw4{display:flex;flex-direction:column}.hero--section.svelte-1e9bsw4{display:flex;align-items:center;height:100vh;justify-content:space-evenly}#projects.svelte-1e9bsw4{text-align:center}.hero--desc.svelte-1e9bsw4{color:#9cccf9;max-width:500px}.projects--section.svelte-1e9bsw4{background:#3e566c;background:#24323f;display:flex;justify-content:center;flex-wrap:wrap}.contact--section.svelte-1e9bsw4{display:flex;flex-wrap:wrap;justify-content:space-evenly;background-color:#273549;color:white;padding-bottom:60px}.h2--contact.svelte-1e9bsw4{text-align:center}.about--section.svelte-1e9bsw4{background-color:#24323f;display:flex;flex-wrap:wrap;justify-content:center}.about--h2.svelte-1e9bsw4{text-align:center;margin:20px 0}.svg--arrow.svelte-1e9bsw4{width:25%;transform:translateY(-47%);flex-basis:100%}img.svelte-1e9bsw4{height:203px;object-fit:cover;border-radius:21px;border:3px solid black;margin:10px}h1.svelte-1e9bsw4{font-size:5rem}h2.svelte-1e9bsw4{font-size:3rem;flex-basis:100%}h1.svelte-1e9bsw4,h2.svelte-1e9bsw4{font-family:"Oswald", sans-serif;color:#e2e55c;text-transform:uppercase}.about--p.svelte-1e9bsw4{color:#9cccf9;max-width:700px}.h2--contact.svelte-1e9bsw4{margin:80px}main.svelte-1e9bsw4{background-color:#273549;height:100vh}.svelte-1e9bsw4{margin:0;padding:0;font-family:"Source Code Pro", monospace}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="svelte-1e9bsw4"><section class="hero--section svelte-1e9bsw4"><div class="text--container svelte-1e9bsw4"><div class="svelte-1e9bsw4"><p class="hero--desc p--bigger svelte-1e9bsw4">I&#39;m <strong class="svelte-1e9bsw4">Jarle</strong> a</p>
        <h1 class="svelte-1e9bsw4">Frontend developer</h1>
        <h2 class="hero--h2 svelte-1e9bsw4">Simplifying complexity</h2>
        <p class="hero--desc svelte-1e9bsw4">I thrive on crafting intuitive user experiences, making the complex as
          simple as i can for my users
        </p></div>
      ${validate_component(Button, "Button").$$render($$result, { message: "Projects" }, {}, {})}</div></section>
  <section class="projects--section svelte-1e9bsw4"><svg class="svg--arrow svelte-1e9bsw4" width="274" height="259" viewBox="0 0 274 259" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M123.919 253.081C131.143 260.306 142.857 260.306 150.081 253.081L267.815 135.348C275.039 128.124 275.039 116.41 267.815 109.185C260.59 101.961 248.877 101.961 241.652 109.185L137 213.837L32.3482 109.185C25.1235 101.961 13.4099 101.961 6.18524 109.185C-1.03946 116.41 -1.03946 128.124 6.18524 135.348L123.919 253.081ZM118.5 0L118.5 240H155.5V0L118.5 0Z" fill="#E2E55C" fill-opacity="0.12" class="svelte-1e9bsw4"></path></svg>
    <h2 id="projects" class="svelte-1e9bsw4">Projects</h2>
    ${validate_component(CardList, "CardList").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          siteUrl: "https://reliable-kashata-528c36.netlify.app/index.html?fbclid=IwAR2EjC3LsaS-0tNUGU0ePLmCrcArbGafMxSesHHc4kOWasJTj5wCvihM0YE/",
          projectType: "Blog",
          projectDesc: "This is my year one exam project on Noroff. The brief said to make a blog using wordpress as a headless cms.",
          title: "The Synthethic Scribe",
          imgURL: "src/assets/aboutAi.jpg"
        },
        {},
        {}
      )}
      ${validate_component(Card, "Card").$$render(
        $$result,
        {
          siteUrl: "https://lively-sawine-3262d2.netlify.app/",
          projectType: "Ecommerce",
          projectDesc: "This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays",
          title: "Rainydays",
          imgURL: "src/assets/rainyDaysss.jpg"
        },
        {},
        {}
      )}
      ${validate_component(Card, "Card").$$render(
        $$result,
        {
          siteUrl: "https://sweet-gumption-216664.netlify.app/index.html?fbclid=IwAR1uBTurQsIklQe4oCAFu5WtCqP1l4Ugj0rkib2UK-vXZXeppgIAy6gTeU0",
          projectType: "Text heavy",
          projectDesc: "This was my crosscourse assignment, the brief said to make a ecommerce site selling jackets for a fictional brand called RainyDays",
          title: "CSM",
          imgURL: "CSM.jpg"
        },
        {},
        {}
      )}`;
    }
  })}</section>
  <section class="contact--section svelte-1e9bsw4"><h2 class="h2--contact svelte-1e9bsw4">Contact me</h2>
    ${validate_component(Contactinfo, "ContactInfo").$$render($$result, {}, {}, {})}
    ${validate_component(Form, "Form").$$render($$result, {}, {}, {})}
    <div class="svelte-1e9bsw4"></div></section>
  <section class="about--section svelte-1e9bsw4"><h2 class="about--h2 svelte-1e9bsw4">About</h2>
    <div class="svelte-1e9bsw4"><p class="about--p svelte-1e9bsw4">I&#39;m a former teacher turned frontend developer. It all started when i
        needed to learn to code to teach it to my pupils, i got instantly
        hooked, and decided there and then that eventhough i love teaching this
        is what i want to do with my life. I love learning new things, problem
        solve, and the feeling of finnaly solving a problem, both for myself and
        for other people. The more i learn the more i realize that code is a
        tool to help people, all people. So my focus is shifting more and more
        towards making code that first and foremost helps my users with their
        tasks rather than add more complexity.
      </p></div>
    <img src="src/assets/portrait.jpg" alt="" class="svelte-1e9bsw4"></section></main>
<footer class="svelte-1e9bsw4"></footer>`;
});
export {
  Page as default
};
