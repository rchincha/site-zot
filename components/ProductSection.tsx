import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import styles from "@/styles/ProductSection.module.scss";
import { Button, Stack, Typography } from "@mui/material";

const ProductSection = () => {
  return (
    <>
      <div className={styles.planetThree}>
        <ExportedImage
          src={"images/planet_3.svg"}
          height={1500}
          width={1500}
          alt="planet3"
        />
      </div>
      <div className={styles.planetContainer}>
        <div className={styles.planetTwo}>
          <ExportedImage
            src={"images/planet_2.svg"}
            height={340}
            width={340}
            alt="planet2"
          />
        </div>
      </div>
      <Stack direction="column" className={styles.productContainer} spacing={4}>
        <Typography className={styles.productTitle}>What is ZOT?</Typography>
        <Typography className={styles.productTextBlock}>
          There a two broad trends occurring currently in how we build,
          distribute and consume software. The first one is the increasing
          adoption container technologies. The second one is that we no longer
          build everything from scratch but compose our software solutions from
          various sources but this also raises the important question of
          software provenance and supply chain security.
        </Typography>
        <Typography className={styles.productTextBlock}>
          Zot intends to play an important role in this regard. At its heart,
          zot is a production-ready vendor-neutral OCI image registry with
          images stored in OCI image format, distribution specification
          on-the-wire, that&apos;s it!
        </Typography>
        <Stack direction="row" spacing={3} className={styles.buttonContainer}>
          <Button variant="outlined" className={styles.howItWorksButton}>
            How it works
          </Button>
          <Button variant="text" className={styles.specsLink}>
            More detailed specs
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ProductSection;
