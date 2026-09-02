import {
  CancelOutlined,
  CancelPresentation,
  MessageOutlined,
  SmsFailed,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SmsField from "./SmsField";

export default function Notification() {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  return (
    <div>
      <Dialog
        open
        slotProps={{
          paper: {
            sx: {
              width: "500px",
              height: "100vh",
              margin: "0px",
              maxHeight: "100vh",
              position: "absolute",
              top: "0",
              right: "0",
              padding: "0",
            },
          },
          backdrop: {
            sx: {
              backdropFilter: "blur(10px)",
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #eee",
          }}
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MessageOutlined />
            <Typography
              variant={"h5"}
              color="primary"
              sx={{ fontWeight: "500" }}
            >
              إرسال رسالة
            </Typography>
          </Box>

          <CloseIcon
            color={theme.palette.secondary.main}
            sx={{ cursor: "pointer" }}
          />
        </DialogTitle>

        <DialogActions
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              borderBottom: "1px solid #eee",
            }}
          >
            <RadioGroup
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
              aria-labelledby={`$-label`}
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  ".css-1tg0ib3-MuiTypography-root": {
                    fontWeight: "700",
                  },
                }}
                value="sms"
                control={<Radio />}
                label="رسالة (SMS)"
              />

              <FormControlLabel
                sx={{
                  ".css-1tg0ib3-MuiTypography-root": {
                    fontWeight: "700",
                  },
                }}
                value="app"
                control={<Radio />}
                label="إشعار (App)"
              />
            </RadioGroup>
          </FormControl>
          <SmsField />
        </DialogActions>
      </Dialog>
    </div>
  );
}
