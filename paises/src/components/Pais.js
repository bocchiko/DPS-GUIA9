import {useEffect, useState} from "react";
import {Card} from "react-native-elements";
import {Text, View, Image} from "react-native";

const Pais = ({ resultado }) => {
    const [info, setInfo] = useState([]);
    const [nombre, setNombre] = useState();
    const [capital, setCapital] = useState();
    const [region, setRegion] = useState();
    const [lengua, setLengua] = useState([]);
    const [km2, setKm2] = useState([]);
    const [banderaURL, setBanderaURL] = useState();
    const [codigoPais, setCodigoPais] = useState("");

    const construirURLBandera = (codigoPais) => {
        const codigoEnMinusculas = codigoPais.toLowerCase();
        return `https://flagcdn.com/32x24/${codigoEnMinusculas}.png`;
      };

    useEffect(() => {
        setInfo(resultado);
        lengua.length = 0
        Object.values(resultado).map((item) => {
            setNombre(item.nome.abreviado);
            setCapital(item.governo.capital.nome);
            setRegion(item.localizacao.regiao.nome);
            setKm2(`${item.area.total} ${item.area.unidade.símbolo}`);

            const codigoPais = item.id["ISO-3166-1-ALPHA-2"];
            setCodigoPais(codigoPais);

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
                <Image
                    source={{ uri: construirURLBandera(codigoPais) }}
                    style={{ width: 32, height: 24 }}
                />
            </View>
        </Card>
    );
}

export default Pais;





