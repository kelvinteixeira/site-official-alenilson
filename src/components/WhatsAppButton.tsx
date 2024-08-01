import { IconButton } from "@mui/material";

export const WhatsAppButton = () => {
  const handleWhatsAppButtonClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5583987511576"
    );
  };

  return (
    <IconButton
      onClick={handleWhatsAppButtonClick}
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        animation: "pulse 1.5s infinite",
      }}
    >
      <img style={{ width: 80, height: 80 }} src="/images/WhatsAppLogo.png" alt="" />
    </IconButton>
  );
};
