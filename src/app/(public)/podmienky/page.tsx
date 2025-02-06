import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const metadata = { title: "Podmienky používania | Zoska" };

export default function TermsAndConditions() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)", // Ensures proper spacing below the navbar
        textAlign: "center",
        py: 4, // Adds padding
      }}
    >
      {/* Terms and Conditions Title */}
      <Typography variant="h4" sx={{ padding: "30px" }} gutterBottom>
        Podmienky používania
      </Typography>

      {/* Terms and Conditions Content */}
      <Box sx={{ maxWidth: 600, width: "100%", mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Tieto Podmienky používania upravujú vzťah medzi používateľom a poskytovateľom našich služieb. Prístupom na našu stránku alebo používaním našich služieb súhlasíte s týmito podmienkami.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Naša služba je určená výhradne na osobné použitie. Nie ste oprávnení používať našu službu na nezákonné účely alebo porušovanie práv tretích strán.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Vyhradzujeme si právo upravovať tieto podmienky kedykoľvek. Pokračovaním v používaní našich služieb po zmenách súhlasíte s novými podmienkami.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Naša stránka môže obsahovať odkazy na iné webové stránky. Tieto odkazy sú poskytované len ako pohodlnosť, ale nenesieme zodpovednosť za obsah týchto stránok.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Služba môže byť pozastavená alebo prerušená z rôznych dôvodov, vrátane údržby, zlepšovania alebo porušenia podmienok.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Zodpovedáte za všetky informácie, ktoré poskytnete pri používaní našich služieb. Môžeme upraviť alebo odstrániť obsah, ktorý porušuje naše zásady.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Naša spoločnosť nezodpovedá za škody vzniknuté používaním našich služieb alebo neschopnosťou prístupu na stránku.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Ak máte akékoľvek otázky k týmto Podmienkam, kontaktujte nás.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Tieto Podmienky používania sú regulované platnými právnymi predpismi Slovenskej republiky.
        </Typography>
      </Box>
    </Container>
  );
}
