import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import styles from '@/styles/HeroSection.module.scss'
import { Button, Stack, Typography } from '@mui/material'
import Header from './Header'


const HeroSection = () => {
    return (
        <>
            <Stack className={styles.heroWrapper} direction='column'>
                <Header/>
                <div className={styles.heroImage}>
                    <ExportedImage src={'images/Hero-zui-preview.png'} height={672} width={806} alt="planet1" />
                </div>

                <Stack className={styles.heroInteraction} direction='column'>
                    <Typography className={styles.heroText}>A production-ready vendor-neutral OCI image registry server purely based on OCI standards.</Typography>
                    <Typography className={styles.heroSubtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet nulla vulputate egestas quam laoreet. Tristique volutpat a suspendisse sagittis. </Typography>
                    <Stack className={styles.buttonContainer} direction='row' spacing={4}>
                        <Button disableRipple disableFocusRipple size='large' variant='contained' className={styles.getStartedButton}>
                        Get started</Button>
                        <Button disableRipple  disableFocusRipple variant='outlined' className={styles.learnMoreButton}>Learn more</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default HeroSection
