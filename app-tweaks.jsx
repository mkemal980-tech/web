/* ESG LAB — Tweaks: yön, vurgu, tipografi, yoğunluk */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "light",
  "accent": "#fa541c",
  "font": "grotesk",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  '#fa541c': 'orange',
  '#2563eb': 'blue',
  '#4f46e5': 'indigo',
  '#0e7490': 'cyan',
  '#334e68': 'slate'
};

function ESGTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(function () {
    const r = document.documentElement;
    r.setAttribute('data-theme', t.direction);
    r.setAttribute('data-accent', ACCENT_MAP[t.accent] || 'blue');
    r.setAttribute('data-font', t.font);
    r.setAttribute('data-density', t.density);
  }, [t.direction, t.accent, t.font, t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Yön / Direction" />
      <TweakRadio
        label="Tema"
        value={t.direction}
        options={[
          { value: 'light', label: 'Aydınlık' },
          { value: 'dark', label: 'Karanlık' },
          { value: 'contrast', label: 'Kontrast' }
        ]}
        onChange={function (v) { setTweak('direction', v); }}
      />
      <TweakSection label="Renk & Tipografi" />
      <TweakColor
        label="Vurgu"
        value={t.accent}
        options={['#fa541c', '#2563eb', '#4f46e5', '#0e7490', '#334e68']}
        onChange={function (v) { setTweak('accent', v); }}
      />
      <TweakRadio
        label="Başlık fontu"
        value={t.font}
        options={[
          { value: 'grotesk', label: 'Grotesk' },
          { value: 'plex', label: 'Plex' }
        ]}
        onChange={function (v) { setTweak('font', v); }}
      />
      <TweakSection label="Düzen" />
      <TweakRadio
        label="Yoğunluk"
        value={t.density}
        options={[
          { value: 'compact', label: 'Sık' },
          { value: 'regular', label: 'Normal' },
          { value: 'comfy', label: 'Ferah' }
        ]}
        onChange={function (v) { setTweak('density', v); }}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweak-root')).render(<ESGTweaks />);
