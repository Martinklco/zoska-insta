Poznámky
Teória:
- npm = Node package manager
- na github dávať len funkčný bezchybný kód
- na začiatku kódu musí byť ("use client";) keď sú použité funkcie, ktoré čakajú na nejakú akciu ako napr.    - onClick()     - onChange()  

Commands: 
- ls – vypis subory
- cd – prejdi do suboru
- npm run build – kompiluje produkčný server 
- npm start - 
- npm run dev – zapnúť server v dev mode (pre developerov)
- npm install @mui/material @emotion/react @emotion/styled
- npm install @fontsource/roboto          // inštaluje font Roboto


SETUP

Na vytvorenie projektu pouzi:  npx create-next-app@latest

Projekt uploadneme pomocou gitu na github.
Z githubu dame projekt na Vercel.

Vercel – server hosting
- na stranke Vercel.com vytvoreny ucet cez mail
- je potrebne autorizovat github
- importujem vercel do svojho projektu
- deploynem projekt… (server sa automaticky updatuje podľa úprav na githube)

Git commands
- git init 
- git branch -m main         (premenovanie branchu)
- git config –global user.name „Your Name“         // username ten co mam na githube
- git config –global user.email „example@gmail.com“
- git remote -v       (na kontrolu ci je git spravne nakonfigurovany)
- git add .               (pridať všetko zo zložky)

- Na začiatku je potrebné spraviť si kostru

Tipy
- vľavo hore vo file si vždy zapnúť autosave
- komponenty "skladame" v layout.tsx (je vždy potrebné mať na začiatku importované)
- mui.com môžem použiť ako template pre seba alebo chatgpt aby mi to upravil