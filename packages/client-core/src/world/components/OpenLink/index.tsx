import React, { FunctionComponent } from "react";
import { CommonInteractiveData } from "@xr3ngine/engine/src/interaction/interfaces/CommonInteractiveData";
import styles from './OpenLink.module.scss';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

export type OpenLinkProps = {
  onClose: unknown;
  data: CommonInteractiveData;
};

export const OpenLink: FunctionComponent<OpenLinkProps> = ({ onClose, data }: OpenLinkProps) => {

  if(!data){return null;}

  const handleLinkClick = (url) =>{  
    window.open(url, "_blank");
  };

  return  (<Dialog open={true} aria-labelledby="xr-dialog" 
      classes={{
        root: styles.customDialog,
        paper: styles.customDialogInner, 
      }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }} >
        <DialogTitle disableTypography className={styles.dialogTitle}>
          <IconButton aria-label="close" className={styles.dialogCloseButton} color="primary"
              onClick={(): void => { if (typeof onClose === 'function') { onClose(); } }}><CloseIcon /></IconButton>
          <Typography variant="h2"align="left" >{data.interactionText || 'Link'}</Typography>          
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {/* eslint-disable-next-line react/no-danger */}
          <p className={styles.descr}>Please click the Open to navigate to the link.</p>
          { data.payloadUrl && (<Button  variant="outlined" color="primary" onClick={()=>handleLinkClick(data.payloadUrl)}>Open</Button>)}
        </DialogContent>
    </Dialog>);
};