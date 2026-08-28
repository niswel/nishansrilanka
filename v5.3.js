(() => {
  "use strict";

  const V53_TEXT = {
    en: {
      vehicleNote:"Photos show the actual vehicle used for private journeys.",
      realEyebrow:"Real journeys",
      realTitle:"Real journeys. Real guests.",
      realIntro:"A few moments from journeys travelled across Sri Lanka with Nishan.",
      photoElla:"Ella railway journey",
      photoBeach:"Beachside stop",
      photoFood:"Local food experience",
      photoTea:"Tea country",
      photoAirport:"Airport arrival",
      groupNote:"Travelling with a larger party? Suitable vehicles can also be arranged for group tours. The photograph above is from a Malaysian group tour of nine passengers."
    },
    de: {
      vehicleNote:"Die Fotos zeigen das tatsächliche Fahrzeug für private Reisen.",
      realEyebrow:"Echte Reisen",
      realTitle:"Echte Reisen. Echte Gäste.",
      realIntro:"Einige Momente aus Reisen durch Sri Lanka mit Nishan.",
      photoElla:"Reise mit dem Zug bei Ella",
      photoBeach:"Stopp am Strand",
      photoFood:"Lokales kulinarisches Erlebnis",
      photoTea:"Teeland",
      photoAirport:"Ankunft am Flughafen",
      groupNote:"Sie reisen mit einer größeren Gruppe? Für Gruppenreisen können auch passende Fahrzeuge organisiert werden. Das Foto zeigt eine malaysische Gruppe mit neun Gästen."
    },
    fr: {
      vehicleNote:"Les photos montrent le véhicule réellement utilisé pour les voyages privés.",
      realEyebrow:"Voyages réels",
      realTitle:"De vrais voyages. De vrais voyageurs.",
      realIntro:"Quelques moments de voyages à travers le Sri Lanka avec Nishan.",
      photoElla:"Voyage en train à Ella",
      photoBeach:"Arrêt en bord de mer",
      photoFood:"Expérience culinaire locale",
      photoTea:"Pays du thé",
      photoAirport:"Arrivée à l'aéroport",
      groupNote:"Vous voyagez en groupe plus nombreux ? Des véhicules adaptés peuvent également être organisés pour les circuits de groupe. La photo montre un groupe malaisien de neuf voyageurs."
    },
    es: {
      vehicleNote:"Las fotos muestran el vehículo real utilizado para los viajes privados.",
      realEyebrow:"Viajes reales",
      realTitle:"Viajes reales. Viajeros reales.",
      realIntro:"Algunos momentos de viajes por Sri Lanka con Nishan.",
      photoElla:"Viaje en tren por Ella",
      photoBeach:"Parada junto a la playa",
      photoFood:"Experiencia gastronómica local",
      photoTea:"Región del té",
      photoAirport:"Llegada al aeropuerto",
      groupNote:"¿Viajas con un grupo más grande? También se pueden organizar vehículos adecuados para grupos. La foto corresponde a un grupo malasio de nueve pasajeros."
    },
    it: {
      vehicleNote:"Le foto mostrano il veicolo realmente utilizzato per i viaggi privati.",
      realEyebrow:"Viaggi reali",
      realTitle:"Viaggi reali. Ospiti reali.",
      realIntro:"Alcuni momenti di viaggi attraverso lo Sri Lanka con Nishan.",
      photoElla:"Viaggio in treno a Ella",
      photoBeach:"Sosta sulla costa",
      photoFood:"Esperienza gastronomica locale",
      photoTea:"Paese del tè",
      photoAirport:"Arrivo in aeroporto",
      groupNote:"Viaggiate con un gruppo numeroso? Possiamo organizzare anche veicoli adatti ai gruppi. La foto mostra un gruppo malese di nove passeggeri."
    },
    ms: {
      vehicleNote:"Gambar menunjukkan kenderaan sebenar yang digunakan untuk perjalanan persendirian.",
      realEyebrow:"Perjalanan sebenar",
      realTitle:"Perjalanan sebenar. Tetamu sebenar.",
      realIntro:"Beberapa detik daripada perjalanan merentasi Sri Lanka bersama Nishan.",
      photoElla:"Perjalanan kereta api di Ella",
      photoBeach:"Persinggahan di tepi pantai",
      photoFood:"Pengalaman makanan tempatan",
      photoTea:"Kawasan teh",
      photoAirport:"Ketibaan di lapangan terbang",
      groupNote:"Melancong dalam kumpulan yang lebih besar? Kenderaan yang sesuai juga boleh diatur untuk lawatan berkumpulan. Foto ini daripada lawatan kumpulan Malaysia seramai sembilan penumpang."
    },
    ja: {
      vehicleNote:"写真はプライベート旅行で実際に使用している車両です。",
      realEyebrow:"実際の旅",
      realTitle:"実際の旅。実際のお客様。",
      realIntro:"Nishanとスリランカを旅した際のひとときをご紹介します。",
      photoElla:"エラの鉄道の旅",
      photoBeach:"ビーチサイドの立ち寄り",
      photoFood:"ローカルフード体験",
      photoTea:"紅茶の産地",
      photoAirport:"空港でのお出迎え",
      groupNote:"大人数での旅行ですか？グループツアーには人数に合った車両も手配できます。この写真は9名のマレーシア人グループの旅行です。"
    }
  };

  function currentLang(){
    const select=document.getElementById("languageSelect");
    const lang=(select && select.value) || document.documentElement.lang || "en";
    return V53_TEXT[lang] ? lang : "en";
  }

  function applyV53Language(){
    const t=V53_TEXT[currentLang()];
    document.querySelectorAll("[data-v53-i18n]").forEach(el=>{
      const key=el.getAttribute("data-v53-i18n");
      if(Object.prototype.hasOwnProperty.call(t,key)) el.textContent=t[key];
    });
  }

  function setupLanguage(){
    const select=document.getElementById("languageSelect");
    if(!select) return;
    select.addEventListener("change",()=>{
      window.setTimeout(()=>{
        if(typeof window.applyLanguage==="function") window.applyLanguage(select.value);
        applyV53Language();
      },20);
    });
    if(typeof window.applyLanguage==="function") window.applyLanguage(select.value);
    applyV53Language();
  }

  function setupLightbox(){
    const dialog=document.getElementById("v53Lightbox");
    const image=document.getElementById("v53LightboxImage");
    const close=document.getElementById("v53LightboxClose");
    if(!dialog || !image) return;

    const open=(button)=>{
      const src=button.getAttribute("data-v53-photo");
      if(!src) return;
      image.src=src;
      image.alt=button.getAttribute("data-v53-alt") || "";
      if(typeof dialog.showModal==="function") dialog.showModal();
      else dialog.setAttribute("open","");
    };
    const closeDialog=()=>{
      if(typeof dialog.close==="function") dialog.close();
      else dialog.removeAttribute("open");
      image.src="";
    };

    document.querySelectorAll("[data-v53-photo]").forEach(button=>{
      button.addEventListener("click",()=>open(button));
      button.addEventListener("keydown",e=>{
        if(e.key==="Enter" || e.key===" ") { e.preventDefault(); open(button); }
      });
    });
    close.addEventListener("click",closeDialog);
    dialog.addEventListener("click",e=>{
      if(e.target===dialog) closeDialog();
    });
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape" && dialog.open) closeDialog();
    });
  }

  function setupReveal(){
    document.documentElement.classList.add("reveal-ready");
    const items=document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window)){
      items.forEach(el=>el.classList.add("is-visible"));
      return;
    }
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -40px"});
    items.forEach(el=>observer.observe(el));
  }

  function setupTopButton(){
    const button=document.getElementById("topBtn");
    if(!button) return;
    const update=()=>button.classList.toggle("show",window.scrollY>650);
    window.addEventListener("scroll",update,{passive:true});
    update();
    button.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }

  function setupFormReset(){
    const form=document.getElementById("contact-form");
    if(!form) return;

    // Prevent the browser from restoring a previously submitted enquiry
    // when the visitor returns to the form with the Back button.
    window.addEventListener("beforeunload",()=>form.reset());
    window.addEventListener("pageshow",event=>{
      if(event.persisted){
        form.reset();
        if(window.turnstile && typeof window.turnstile.reset==="function") window.turnstile.reset();
      }
    });
  }

  function setupImageFallback(){
    document.querySelectorAll("img").forEach(img=>{
      img.addEventListener("error",()=>{
        img.setAttribute("data-image-error","true");
      },{once:true});
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    setupLanguage();
    setupLightbox();
    setupReveal();
    setupTopButton();
    setupImageFallback();
    setupFormReset();
  });
})();
