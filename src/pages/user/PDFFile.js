import React from "react";
import { Page, Text, View, StyleSheet, PDFViewer, Document, Image, } from "@react-pdf/renderer";
import logo from '../../elements/bannerImage.jpg'
import banner from '../../elements/flying_airplanejpg.jpg'


//flying_airplane
const PDFFile = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
        },
        section: {
            marginTop: 10,
            marginLeft:10,
            flexGrow: 1,
            borderTop: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
            borderRight:"2px dotted black",
            borderRadius:"6px",
            marginBottom:"75vh",

        },
        sectionTwo: {
            marginTop: 10,
            marginRight:10,
            flexGrow: 1,
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            borderRight: "2px solid black",
            borderRadius:"6px",
            marginBottom:"75vh",
            backgroundColor:"white"
        },
        text:{
            borderBottom: "2px solid black",
            color:"white",
            backgroundColor:"#0f1821",
            fontSize:"14px",
            paddingLeft:"70px",
            paddingBottom:"4.3",
            paddingTop:"4.3"
        },
        sectionTwotext:{
            borderBottom: "2px solid black",
            color:"white",
            backgroundColor:"#0f1821",
            fontSize:"14px",
            paddingLeft:"39px",
            paddingBottom:"4.3",
            paddingTop:"4.3"
        },
        para:{
            fontSize:"12px",
            paddingTop:"12px",
            paddingLeft:"12px"
        },
        image:{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
            display: 'block',
            height: '100%',
            width: '100%',
            opacity:"0.5"
        }
    });

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
            
                <View style={styles.section}>
                <Image style={styles.image}  src={logo} alt="images" />
                    <Text style={styles.text}>Airlines BOARDINGPASS</Text>
                    <Text style={styles.para}>Name :           Aman Jain  </Text>
                    <Text style={styles.para}>Flight No. :     1234</Text>
                    <Text style={styles.para}>From :            CSMT</Text>
                    <Text style={styles.para}>To :                 PNQ</Text>
                    <Text style={styles.para}>Date :             01/03/2023</Text>
                    <Text style={styles.para}>Seat :             1 </Text>

                   </View>
                <View style={styles.sectionTwo}>
                 <Image style={styles.image}  src={banner} alt="images" />
                    <Text style={styles.sectionTwotext}> BOARDINGPASS</Text>
                   
                    <Text style={styles.para}>Name :           Aman Jain  </Text>
                    <Text style={styles.para}>Flight No. :     1234</Text>
                    <Text style={styles.para}>From :            CSMT</Text>
                    <Text style={styles.para}>To :                 PNQ</Text>
                    <Text style={styles.para}>Date :             01/03/2023</Text>
                    <Text style={styles.para}>Seat :             1 </Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <PDFViewer style={{width:"100vw",height:"100vh"}}>
            <MyDocument />
        </PDFViewer>
    )
}

export default PDFFile;