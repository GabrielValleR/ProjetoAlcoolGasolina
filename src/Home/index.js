import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native'


const Home = () => {
    const [alcool, setAlcool] = useState()
    const [gasolina, setGasolina] = useState()
    const [resultado, setResultado] = useState('')
    const [helo, setHelo] = useState(true)
    const [viewResult, setViewResult] = useState(false)

    function entrar(status) {
        setHelo(status)
    }
    function Resultado() {
        setViewResult(true)
        let calculo = alcool / gasolina
        if (calculo <= 0.7) {
           return setResultado("Alcool")
        } else {
           return setResultado("Gasolina")
        }
    }



    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                visible={helo}
                transparent={true}

            >
                <View style={styles.helo1}>
                    <View style={styles.helo}>
                        <Text style={
                            [styles.text,
                            {
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginTop: 20,
                                textAlign: 'center'
                            }
                            ]}>
                            Seja Bem-vindo
                        </Text>
                        <Text style={
                            [styles.text,
                            {
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginTop: 20,
                                textAlign: 'center'
                            }
                            ]}>
                            Comparar Alcool e Gasolina
                        </Text>
                        <TouchableOpacity
                            onPress={() => entrar(false)}
                            style={[styles.button, { backgroundColor: '#33CA33' }]}>
                            <Text style={[styles.text, { fontSize: 25, fontWeight: 'bold' }]}>Comparar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.content} >
                <Image source={require('../Assets/logo.png')} />
                <Text style={[styles.text, { fontSize: 25, fontWeight: 'bold', marginTop: 20 }]}>Qual a melhor opção?</Text>
            </View>
            <View style={[styles.content, { marginTop: -40 }]}>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Álcool (preço por litro):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        placeholder='Qual o preço do álcool?'
                        value={alcool}
                        onChangeText={(value)=> setAlcool(value)}

                    />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>Gasolina (preço por litro):</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        value={gasolina}
                        placeholder='Qual o preço da gasolina?'
                        onChangeText={(value)=> setGasolina(value)}
                    />
                    <TouchableOpacity
                        onPress={() => Resultado()}
                        style={styles.button}>
                            
                        <Text style={[styles.text, { fontSize: 25, fontWeight: 'bold' }]}>Calcular</Text>
                    </TouchableOpacity>
                </View>
                <View>
                </View>
            </View>
            <Modal
                animationType='slide'
                visible={viewResult}
            >
                <View style={styles.container}>
                    <View style={styles.content} >
                        <Image source={require('../Assets/gas.png')} />
                        <Text style={[
                            styles.text,
                            {
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginTop: 25,
                                marginBottom:-50,
                                color:'#33CA33'
                            }]}>
                            Compensa usa {resultado}</Text>
                    </View>
                    <View style={[styles.content, {
                         justifyContent:'flex-start'}]}>
                        <Text style={[
                            styles.text,
                            {
                                fontSize: 25,
                                fontWeight: 'bold',
                                marginTop: 20
                            }]}>
                            Com os preços:</Text>
                        <Text style={styles.text}> Álcool: R${Number(alcool).toFixed(2)}</Text>
                        <Text style={styles.text}> Gasolina: R${Number(gasolina).toFixed(2)}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setViewResult(false)
                                setAlcool()
                                setGasolina()
                            }}
                            style={styles.button2}
                                >
                            <Text style={[
                                styles.text,
                                { fontSize: 25, fontWeight: 'bold', color:'#ff3329'}
                            ]}>
                                Calcular Novamente
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    helo1: {
        flex: 1,
        justifyContent: 'flex-end'

    },
    helo: {
        backgroundColor: '#ff3329',
        width: '100%',
        height: '60%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 16
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewText: {
        width: '100%',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#FFF',
        margin: 5,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 5,
        paddingLeft:10,


    },
    button: {
        width: '100%',
        height: 45,
        backgroundColor: '#ff3300',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    button2: {
        width: '80%',
        height: 45,
        backgroundColor: '#000',
        borderRadius: 5,
        borderColor: '#ff3329',
        borderWidth: 2,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Home 