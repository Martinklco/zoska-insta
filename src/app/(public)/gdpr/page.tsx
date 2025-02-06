import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const metadata = { title: "Stránka s gdpr informáciami | Zoska" };

export default function Gdpr() {
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
      {/* GDPR Title */}
      <Typography variant="h4" sx={{ padding: "30px" }} gutterBottom>
        GDPR Informácie
      </Typography>

      {/* GDPR Information Content */}
      <Box sx={{ maxWidth: 600, width: "100%", mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          V súlade s GDPR vám poskytujeme informácie o tom, ako spracovávame vaše osobné údaje. Zhromažďujeme ich na účely poskytovania služieb a zlepšovania používateľskej skúsenosti.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Vaše údaje nebudú zdieľané s tretími stranami bez vášho súhlasu. Spracovávame ich v súlade s princípmi GDPR, ako je spravodlivosť, transparentnosť, minimalizácia údajov a bezpečnosť.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Máte právo na prístup, opravu, vymazanie a obmedzenie spracovania vašich údajov, ako aj na prenosnosť a namietanie proti spracovaniu.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Ak nám poskytnete svoje údaje, máte právo ich kedykoľvek opraviť alebo vymazať. Stačí nás kontaktovať na našich kontaktných údajoch.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          V prípade obáv týkajúcich sa ochrany osobných údajov, máte právo podať sťažnosť na Úrad na ochranu osobných údajov SR.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Vaše osobné údaje uchovávame len po dobu nevyhnutnú na plnenie účelov, na ktoré boli zhromaždené. Po uplynutí tejto doby budú bezpečne vymazané.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Viac informácií nájdete v našich podrobných Zásadách ochrany osobných údajov, ktoré podrobne vysvetľujú spracovanie vašich údajov.
        </Typography>
      </Box>
    </Container>
  );
}
