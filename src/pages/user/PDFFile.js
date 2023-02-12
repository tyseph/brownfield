import React from "react";
import { Page, Text, View, StyleSheet, PDFViewer, Document, Image, } from "@react-pdf/renderer";
import flight from '../../elements/flight.jpg'
import banner from '../../elements/flying_airplanejpg.jpg'
import { useSelector } from "react-redux";
import { useState } from "react";


//flying_airplane
const PDFFile = () => {

    console.log(localStorage.getItem(''))
    const styles = StyleSheet.create({
        page: {
            height: '100vh',
            width: '100vw',
            flexDirection: 'row',
            backgroundColor: '#E4E4E4',
        },
        section: {
            marginTop: 10,
            marginLeft: 10,
            flexGrow: 1,
            borderTop: "2px solid black",
            borderLeft: "2px solid black",
            borderBottom: "2px solid black",
            borderRight: "2px dotted black",
            borderRadius: "6px",
            marginBottom: "75vh",

        },
        sectionTwo: {
            marginTop: 10,
            marginRight: 10,
            flexGrow: 1,
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            borderRight: "2px solid black",
            borderRadius: "6px",
            marginBottom: "75vh",
            backgroundColor: "white"
        },
        text: {
            borderBottom: "2px solid black",
            color: "white",
            backgroundColor: "#0f1821",
            fontSize: "14px",
            paddingLeft: "70px",
            paddingBottom: "4.3",
            paddingTop: "4.3"
        },
        sectionTwotext: {
            borderBottom: "2px solid black",
            color: "white",
            backgroundColor: "#0f1821",
            fontSize: "14px",
            paddingLeft: "39px",
            paddingBottom: "4.3",
            paddingTop: "4.3"
        },
        para: {
            fontSize: "12px",
            paddingTop: "12px",
            paddingLeft: "12px"
        },
        image: {
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
            display: 'block',
            height: '100%',
            width: '100%',
            // opacity: "0.5"
        }
    });

    console.log(useSelector((state) => state.user.booking.passengerInfo))
    const [book, setBook] = useState(useSelector((state) => state.user.booking))

    const data = useSelector((state) => state.user.booking.passengerInfo)
    const MyDocument = () => (
        <Document>
            {
                data.map(p => {
                    return (
                        <Page key={p.seatNo} size="A4" classname="overflow-hidden text-gray-100" style={styles.page}>
                            <View classname="overflow-hidden text-gray-100 p-3" style={styles.section}>
                                {/* <Image classname="overflow-hidden text-gray-100" style={styles.image} src={flight} alt="images" /> */}
                                <Text classname="overflow-hidden text-gray-100" style={styles.text}>BrownField Airlines</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Name :           {p.firstName} {p.lastName} </Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Flight No. :     {book.flight.flightId}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Booking ID. :     {book.bookingId}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>From :            {book.flight.source.name}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>To :                 {book.flight.destination.name}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Date :             {book.dateOfTravelling}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Seat :             {p.seatNo}</Text>

                            </View>
                            <View classname="overflow-hidden text-gray-100 p-3" style={styles.sectionTwo}>
                                {/* <Image classname="overflow-hidden text-gray-100" style={styles.image} src={flight} alt="images" /> */}
                                <Text classname="overflow-hidden text-gray-100" style={styles.sectionTwotext}>Boarding Pass</Text>

                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Name :           {p.firstName} {p.lastName}  </Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Flight No. :     {book.flight.flightId}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Booking ID. :     {book.bookingId}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>From :            {book.flight.source.code}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>To :                {book.flight.destination.code}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Date :             {book.dateOfTravelling}</Text>
                                <Text classname="overflow-hidden text-gray-100" style={styles.para}>Seat :             {p.seatNo} </Text>
                            </View>
                        </Page>)
                })
            }


        </Document>
    );

    return (
        <PDFViewer style={{ width: "100vw", height: "100vh" }}>
            <MyDocument />
        </PDFViewer>
    )
}

export default PDFFile;