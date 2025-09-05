import react, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Alert, StyleSheet, SafeAreaView} from 'react-native';
import Header from './components/Header';

export default function App() {
  const [pagina, setPagina] = useState('Home');

  return (
<SafeAreaView style={styles.container}>
  <Header pagina= {pagina} setPagina={setPagina}/>
<ScrollView contentContainerStyle={styles.content}>
  {pagina === 'Home' && <Home />}
  {pagina === 'Sobre' && <Sobre />}
  {pagina === 'Serviço' && <Servico />}
  {pagina === 'Contato' && <Contato />}
</ScrollView>
<Footer/>
</SafeAreaView>

  );
}

function Header({pagina, setPagina}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>GoalAndSpike</Text>
    <View style={styles.nav}>
      {["Home", "Sobre", "Serviço", "Contato"].map((p) =>(
        <TouchableOpacity
        key={p}
        style={[styles.navItem, pagina === p && styles.navItemActive]}
        onPress={() => setPagina(p)}
        >
          <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
}

function Home() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Bem vindo(a) a GoalAndSpike</Text>
      <Text>"Vista a emoção!"</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Sobre Nós</Text>
      <Text>Na Goal & Spike, acreditamos que o esporte vai muito além das quadras e dos campos — ele é emoção, identidade e paixão. Nossa missão é aproximar torcedores de seus ídolos, oferecendo produtos oficiais e autografados que carregam histórias e conquistas inesquecíveis.

Mais do que uma loja, somos uma comunidade para fãs de futebol e vôlei que buscam autenticidade e exclusividade. Cada item da Goal & Spike é acompanhado de certificado de autenticidade e pensado para transformar o amor pelo esporte em uma experiência única.

Com o slogan “Vista a emoção!”, queremos levar aos fãs não apenas produtos, mas a chance de viver o esporte de forma mais intensa, seja com camisas, bolas, acessórios ou até mesmo encontros com atletas.

Na Goal & Spike, você não compra apenas um produto. Você leva para casa um pedaço da emoção do esporte.</Text>
    </View>
  );
}

function Servico() {
  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Nossos Serviços</Text>
      <Text>Venda de produtos exclusivos</Text>
      <Text>Edições limitadas colecionáveis</Text>
      <Text>Certificação de autenticidade</Text>
      <Text>Atendimento ao cliente</Text>
    </View>
  );
}

function Contato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  function enviar () {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro!', 'Preencha todos os campos.');
      return;
    }
    Alert.alert('Mensagem enviada com sucesso.', `Obrigado, ${nome}! Retornaremos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');

  }

  return (
    <View style={styles.section}>
      <Text style={styles.Title}>Contato</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        style={[styles.input, {height: 100}]}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: 'white'}}>2025 GoalAndSpike. Todos os direitos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f7fa'},
  header: {backgroundColor: '#004080', padding: 40, alignContent: 'center', alignItems: 'center'},
  headerTitle: {color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 12},
  nav: {flexDirection: 'row', justifyContent: 'space-around'},
  navButton: {paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
  navButtonActive: {backgroundColor: '#0066cc'},
  navButtonText: {color: 'white', fontWeight: 'bold'},
  content: {padding: 20, flexGrow: 1},
  section: {marginBottom: 20},
  title: {fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {color: 'white', fontWeight: 'bold', fontSize: 16},
  footer: {backgroundColor: '#00264d', padding: 15, alignItems: 'center'},
});

