import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import styles from '@/styles/HeroSection.module.scss'
import { Button, Stack, Typography } from '@mui/material'


const HeroSection = () => {
    return (
        <>
            <div className={styles.planetOne}>
                <ExportedImage src={'images/planet_1.svg'} height={800.85} width={953.3} alt="planet1" />
            </div>
            <Stack className={styles.heroWrapper} direction='column'>
                <Typography className={styles.heroText}>A production-ready vendor-neutral OCI image registry server purely based on OCI standards.</Typography>
                <Stack className={styles.buttonContainer} direction='row' spacing={3}>
                    <Button disableRipple disableFocusRipple size='large' variant='contained' className={styles.getStartedButton}>
                    Get started</Button>
                    <Button disableRipple  disableFocusRipple variant='outlined' className={styles.learnMoreButton}>Learn more</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default HeroSection
