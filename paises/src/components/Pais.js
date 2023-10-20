import {useEffect, useState} from "react";
import {Card} from "react-native-elements";
import {Text, View} from "react-native";

const Pais = ({ resultado }) => {
    const [info, setInfo] = useState([]);
    const [nombre, setNombre] = useState();
    const [capital, setCapital] = useState();
    const [region, setRegion] = useState();
    const [lengua, setLengua] = useState([]);
    const [km2, setKm2] = useState([]);
    const [bandera, setBandera] = useState("");

    useEffect(() => {
        setInfo(resultado);
        lengua.length = 0
        Object.values(resultado).map((item) => {
            setNombre(item.nome.abreviado);
            setCapital(item.governo.capital.nome);
            setRegion(item.localizacao.regiao.nome);
            setKm2(`${item.area.total} ${item.area.unidade.símbolo}`);

            Object.values(item.linguas).map((item) => {
                lengua.push(item.nome);
            });
        
        });
    }, [resultado]);

    return (
        <Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider/>
            <View style={{justifyContent: 'center'}}>
                <Text>Capital: {capital}</Text>
                <Text>Region: {region}</Text>
                <Text>Lenguas: {lengua.toString()}</Text>
                <Text>Kilómetros Cuadrados: {km2}</Text>
            </View>
        </Card>
    );
}

export default Pais;





