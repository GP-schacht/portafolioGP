
import { Card } from "../components/Card";


const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const tools = [
  [`${base}/react/react-original.svg`,          "React",        "https://react.dev"],
  [`${base}/flutter/flutter-original.svg`,      "Flutter",      "https://flutter.dev"],
  [`${base}/oracle/oracle-original.svg`,        "Oracle APEX",  "https://apex.oracle.com"],
  [`${base}/javascript/javascript-original.svg`,"JavaScript",   "https://developer.mozilla.org/docs/Web/JavaScript"],
  [`${base}/html5/html5-original.svg`,          "HTML",         "https://developer.mozilla.org/docs/Web/HTML"],
  [`${base}/css3/css3-original.svg`,            "CSS",          "https://developer.mozilla.org/docs/Web/CSS"],
  [`${base}/java/java-original.svg`,            "Java",         "https://java.com"],
  [`${base}/supabase/supabase-original.svg`,    "Supabase",     "https://supabase.com"],
  [`${base}/firebase/firebase-original.svg`,    "Firebase",     "https://firebase.google.com"],
  [`${base}/csharp/csharp-original.svg`,        "C#",           "https://dotnet.microsoft.com/languages/csharp"],
  [`${base}/git/git-original.svg`,              "Git",          "https://git-scm.com"],
  [`${base}/python/python-original.svg`,        "Python",       "https://python.org"],
];



export default function HardSkills() {
  return (
    <section className="px-[10%] my-20">
         <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-8 bg-primary rounded-full" />
        <h2 className="text-h1 font-bold text-text">Hard Skills</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))]">
        {tools.map(([srcImg, descripcion, href]) => (
          <Card key={href} srcImg={srcImg} descripcion={descripcion} href={href} />
        ))}
      </div>
    </section>
  );
}