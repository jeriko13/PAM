import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet, 
  Alert,
  BackHandler
} from 'react-native'


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      header: 'Aplikasi Form Mahasiswa,Bangun Ruang & Bangun Datar',
      //FORMULIR PENDAFTRAN
      nim: '',
      nama: '',
      prodi:'',
      alamat:'',
      //KUBUS
      sisiKubus:0,
      hasilVolumeKubus:0,
      hasilLPKubus:0,
      //BALOK
      panjangBalok:0,
      lebarBalok:0,
      tinggiBalok:0,
      panjangBalok1:0,
      lebarBalok1:0,
      tinggiBalok1:0,
      hasilVolumBalok:0,
      hasilKelilingBalok:0,
      //SEGITIGA
      alasSegitiga:0,
      tinggiSegitiga:0,
      hasilLuasSegitiga:0,
      //LINGKARAN
      jariLingkaran:0,
      hasilLuasLingkaran:0,
      //Tabung 
      alasTabung:0,
      tinggiTabung:0,
      jariTabung1:0,
      jariTabung2:0,
      hasilVolumeTabung:0,
    
      //Persegi
      sisiPersegi1:0,
      sisiPersegi2:0,
      hasilLuasPersegi:0,
       //Persegi Panjang
       panjang:0,
       lebar:0,
       hasilLuasPersegiPanjang:0,
 




    };
  }


   formPendaftaran = () => {
    let nama = this.state.nama;
    let nim = this.state.nim;
    let prodi = this.state.prodi;
    let alamat = this.state.alamat;
    this.setState({nama:nama});
    this.setState({nim:nim});
    this.setState({prodi:prodi});
    this.setState({alamat:alamat});
    this.alertFormPendaftaran(nama, nim, prodi, alamat);
  }

  hitungPLdanVolumeKubus = () => {
    let hasilLP = 6 * parseFloat(this.state.sisiKubus)* parseFloat(this.state.sisiKubus);
    let hasilVolume =  parseFloat(this.state.sisiKubus) * parseFloat(this.state.sisiKubus)* parseFloat(this.state.sisiKubus)
    this.setState({hasilVolumeKubus:hasilLP});
    this.setState({hasilLPKubus:hasilVolume});
    this.alertKubus(hasilVolume, hasilLP);
  }

  hitungVolumeBalok = () => {
    let hasilVolume =  parseFloat(this.state.panjangBalok) * parseFloat(this.state.lebarBalok)* parseFloat(this.state.tinggiBalok)
    this.setState({hasilVolumeBalok:hasilVolume});
    this.alertBalok(hasilVolume);
  }

  hitungKelilingBalok = () => {
    let hasilKeliling =  4  * parseFloat(this.state.panjangBalok1) * parseFloat(this.state.lebarBalok1)* parseFloat(this.state.tinggiBalok1)
    this.setState({hasilKelilingBalok:hasilKeliling});
    this.alertBalokKeliling(hasilKeliling);
  }

  hitungLuasSegitiga = () => {
    let hasilLuas =  0.5 * parseFloat(this.state.tinggiSegitiga)* parseFloat(this.state.alasSegitiga)
    this.setState({hasilLuasSegitiga:hasilLuas});
    this.alertSegitiga(hasilLuas);
  }

  hitungLuasLingkaran = () => {
    let hasilLuas =  3.14 * parseFloat(this.state.jariLingkaran)* parseFloat(this.state.jariLingkaran)
    this.setState({hasilLuasLingkaran:hasilLuas});
    this.alertLingkaran(hasilLuas);

  }

  hitungVolumeTabung = () => {
    let hasilVolume =  3.14 * parseFloat(this.state.jariTabung1)* parseFloat(this.state.jariTabung2) * parseFloat(this.state.tinggiTabung)
    this.setState({hasilVolumeTabung:hasilVolume});
    this.alertVolumeTabung(hasilVolume);



  }
  hitungLuasPersegi = () => {
    let hasilLuas =  parseFloat(this.state.sisiPersegi1)* parseFloat(this.state.sisiPersegi2)
    this.setState({hasilLuasPersegi:hasilLuas});
    this.alertPersegi(hasilLuas);

  }
  hitungLuasPersegiPanjang = () => {
    let hasilLuas =  parseFloat(this.state.panjang)* parseFloat(this.state.lebar)
    this.setState({hasilLuasPersegiPanjang:hasilLuas});
    this.alertPersegiPanjang(hasilLuas);

  }



  jikaKembali = () => {
    Alert.alert('Warning','Apakah Mau Keluar Aplikasi?',[
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Iya',
        onPress: () => BackHandler.exitApp(),
      }
    ])
    return true;
  }

  alertKubus = (hasilVolume, hasilLP) => {
  Alert.alert('Hasil Volume Kubus: '+ hasilVolume.toString() + '\nHasil Luas Permukaan Kubus: '+hasilLP,'',[
    {
        text: 'Batal',
        onPress: () => console.log('Batalkan'),
        style: 'cancel',
    },
    {
        text: 'OK',
        onPress: () => console.log('Okay'),
    },
    ] 
    )
  }

  alertBalok = (hasilVolume) => {
  Alert.alert('Hasil Volume Balok: '+ hasilVolume.toString() ,'',[
    {
        text: 'Batal',
        onPress: () => console.log('Batalkan'),
        style: 'cancel',
    },
    {
        text: 'OK',
        onPress: () => console.log('Okay'),
    },
    ] 
    )
  }
  alertBalokKeliling = (hasilKeliling) => {
    Alert.alert('Hasil Keliling Balok: '+ hasilKeliling.toString() ,'',[
      {
          text: 'Batal',
          onPress: () => console.log('Batalkan'),
          style: 'cancel',
      },
      {
          text: 'OK',
          onPress: () => console.log('Okay'),
      },
      ] 
      )
    }

  alertSegitiga = (hasilLuas) => {
  Alert.alert('Hasil Luas Segitiga: '+ hasilLuas.toString() ,'',[
    {
        text: 'Batal',
        onPress: () => console.log('Batalkan'),
        style: 'cancel',
    },
    {
        text: 'OK',
        onPress: () => console.log('Okay'),
    },
    ] 
    )
  }

  alertLingkaran = (hasilLuas) => {
  Alert.alert('Hasil Luas Lingkaran: '+ hasilLuas.toString() ,'',[
    {
        text: 'Batal',
        onPress: () => console.log('Batalkan'),
        style: 'cancel',
    },
    {
        text: 'OK',
        onPress: () => console.log('Okay'),
    },
    ] 
    )
  }


  alertVolumeTabung = (hasilVolume) => {
    Alert.alert('Hasil Volume Tabung: '+ hasilVolume.toString() ,'',[
      {
          text: 'Batal',
          onPress: () => console.log('Batalkan'),
          style: 'cancel',
      },
      {
          text: 'OK',
          onPress: () => console.log('Okay'),
      },
      ] 
      )
    }

   
    alertPersegi = (hasilLuas) => {
      Alert.alert('Hasil Luas Persegi: '+ hasilLuas.toString() ,'',[
        {
            text: 'Batal',
            onPress: () => console.log('Batalkan'),
            style: 'cancel',
        },
        {
            text: 'OK',
            onPress: () => console.log('Okay'),
        },
        ] 
        )
      }

      alertPersegiPanjang = (hasilLuas) => {
        Alert.alert('Hasil Luas Persegi Panjang: '+ hasilLuas.toString() ,'',[
          {
              text: 'Batal',
              onPress: () => console.log('Batalkan'),
              style: 'cancel',
          },
          {
              text: 'OK',
              onPress: () => console.log('Okay'),
          },
          ] 
          )
        }
  

  alertFormPendaftaran = (nama,nim,prodi,alamat) => {
  Alert.alert('Pendaftaran Berhasil','\n Nama :' + nama +'\n NIM :' + nim+'\n Prodi :' + prodi+'\n Alamat :' + alamat,[
    {
        text: 'Batal',
        onPress: () => console.log('Batalkan'),
        style: 'cancel',
    },
    {
        text: 'OK',
        onPress: () => console.log('Okay'),
    },
    ] 
    )
  }

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress',this.jikaKembali);
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }
  
  
  render() {
    return(
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor='#ffffff'/>
        <View style={tampilan.headcop}>
          <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:18}}>
            {this.state.header}
          </Text>
        </View>
        <TouchableOpacity 
          style= {tampilan.kontainergambar}
          onPress={() => console.log('Hello')}>
            <Image
            source={require('./assets/jeri.jpeg')}
            style={tampilan.gambar}
            />
        </TouchableOpacity>
        <Text style={tampilan.textBiodata}>──────────────────────</Text>
        <Text style={tampilan.textBiodata}> Nama: Jeri Riswanto</Text>
        <Text style={tampilan.textBiodata}>Nim: 1903040012</Text>
        <Text style={tampilan.textBiodata}>Pemograman Aplikasi Mobile A1</Text>
        <Text style={tampilan.textBiodata}>──────────────────────</Text>
        <Text style={tampilan.textSatu}>Formulir Pendaftaran</Text>
        <Text style={tampilan.textDua}>Nama</Text>
        
        <TextInput
          placeholder='Nama'
          placeholderTextColor={'grey'}
          value={this.state.nama}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({nama: value})} />
        <Text style={tampilan.textDua}>NIM</Text>
        <TextInput
          placeholder='NIM'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.nim}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({nim: value})} />
        <Text style={tampilan.textDua}>Prodi</Text>
        <TextInput
          placeholder='Program Studi'
          placeholderTextColor={'grey'}
          value={this.state.prodi}
          style={tampilan.inputtext}
          onChangeText={(value) => this.setState({prodi: value})}/>
        <Text style={tampilan.textDua}>Alamat</Text>
        <TextInput
          placeholder='Alamat'
          placeholderTextColor={'grey'}
          value={this.state.alamat}
          style={tampilan.inputtext}
          onChangeText={(value) => this.setState({alamat: value})}/>
        <TouchableOpacity style={tampilan.button}
          // onPress={this.formPendaftaran()} 
           onPress={()=>this.formPendaftaran()} 
          >
          <Text style={tampilan.textButton}>Daftar</Text>
          
        </TouchableOpacity> 

        {/* RUMUS BERBAGAI MACAM BANGUN RUANG DAN DATAR */}
        <Text style={tampilan.textSatu}>Rumus Bangun Ruang Dan Datar</Text>
        <Text style={tampilan.textSatu}>KUBUS</Text>
        <Text style={tampilan.textDua}>Luas Permukaan dan Volume </Text>
        <Text style={tampilan.textDua}>LP = 6 X S X S</Text>
        <Text style={tampilan.textDua}>V = S X S X S</Text>
        <Text style={tampilan.textDua}>Masukkan sisi kubus</Text>
        <TextInput
          placeholder='Masukkan sisi kubus '
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.sisiKubus.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({sisiKubus: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungPLdanVolumeKubus()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        </TouchableOpacity> 
        {/* RUMUS BERBAGAI MACAM BANGUN */}
        <Text style={tampilan.textSatu}>BALOK</Text>
        <Text style={tampilan.textDua}>Luas Permukaan dan Volume </Text>
        <Text style={tampilan.textDua}>V = P X L X T</Text>
        <Text style={tampilan.textDua}>Masukkan Panjang Balok</Text>
        <TextInput
          placeholder='Masukkan Panjang Balok'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.panjangBalok.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({panjangBalok: value})} />
        <Text style={tampilan.textDua}>Masukkan Lebar Balok</Text>
        <TextInput
          placeholder='Masukan Lebar Balok'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.lebarBalok.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({lebarBalok: value})} />
        <Text style={tampilan.textDua}>Masukkan Tinggi Balok</Text>
        <TextInput
          placeholder='Masukkan Tinggi Balok '
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.tinggiBalok.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({tinggiBalok: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungVolumeBalok()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        
        </TouchableOpacity> 

 {/* RUMUS BERBAGAI MACAM BANGUN */}
 <Text style={tampilan.textSatu}>KELILING BALOK</Text>
      
        <Text style={tampilan.textDua}>Keliling Balok = 4 x (p + l + t)</Text>
        <Text style={tampilan.textDua}>Masukkan Panjang Balok</Text>
        <TextInput
          placeholder='Masukkan Panjang Balok'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.panjangBalok1.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({panjangBalok1: value})} />
        <Text style={tampilan.textDua}>Masukkan Lebar Balok</Text>
        <TextInput
          placeholder='Masukan Lebar Balok'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.lebarBalok1.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({lebarBalok1: value})} />
        <Text style={tampilan.textDua}>Masukkan Tinggi Balok</Text>
        <TextInput
          placeholder='Masukkan Tinggi Balok '
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.tinggiBalok1.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({tinggiBalok1: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungKelilingBalok()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        
        </TouchableOpacity> 

         {/* RUMUS BERBAGAI MACAM BANGUN */}
        <Text style={tampilan.textSatu}>SEGITIGA</Text>
        <Text style={tampilan.textDua}>Luas Segitiga </Text>
        <Text style={tampilan.textDua}>L = 1/2 X A X T</Text>
        <Text style={tampilan.textDua}>Masukkan Alas Segitiga</Text>
        <TextInput
          placeholder='Masukkan Alas Segitiga'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.alasSegitiga.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({alasSegitiga: value})} />
        <Text style={tampilan.textDua}>Masukkan Tinggi Segitiga</Text>
        <TextInput
          placeholder='Masukkan Tinggi Segitiga'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.tinggiSegitiga.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({tinggiSegitiga: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungLuasSegitiga()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        </TouchableOpacity> 
         {/* RUMUS BERBAGAI MACAM BANGUN */}
        <Text style={tampilan.textSatu}>LINGKARAN</Text>
        <Text style={tampilan.textDua}>Luas LINGKARAN </Text>
        <Text style={tampilan.textDua}>L = phi X r X r</Text>
        <Text style={tampilan.textDua}>Masukkan Jari-jari Lingkaran</Text>
        <TextInput
          placeholder='Masukkan jari-jari lingkaran'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.jariLingkaran.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({jariLingkaran: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungLuasLingkaran()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        </TouchableOpacity> 

        {/* RUMUS BERBAGAI MACAM BANGUN */}
        <Text style={tampilan.textSatu}>VOLUME TABUNG</Text>
        <Text style={tampilan.textDua}>V = π × r × r × t</Text>
        <Text style={tampilan.textDua}>Masukkan Jari-jari Tabung</Text>
        <TextInput
        placeholder='Masukkan jari-jari Tabung'
        placeholderTextColor={'grey'}
        keyboardType='numeric'
        value={this.state.jariTabung1.toString()}
        style={tampilan.inputtext}
        onChangeText={(value)=>this.setState({jariTabung1: value})} />
      <Text style={tampilan.textDua}>Masukkan Jari-jari Tabung</Text>
      <TextInput
        placeholder='Masukkan jari-jari Tabung'
        placeholderTextColor={'grey'}
        keyboardType='numeric'
        value={this.state.jariTabung2.toString()}
        style={tampilan.inputtext}
        onChangeText={(value)=>this.setState({jariTabung2: value})} />
      <Text style={tampilan.textDua}>Masukkan Tinggi Tabung</Text>
      <TextInput
        placeholder='Masukkan Tinggi Tabung '
        placeholderTextColor={'grey'}
        keyboardType='numeric'
        value={this.state.tinggiTabung.toString()}
        style={tampilan.inputtext}
        onChangeText={(value)=>this.setState({tinggiTabung: value})} />
      <TouchableOpacity style={tampilan.button}
      onPress={()=>this.hitungVolumeTabung()} 
      >
      <Text style={tampilan.textButton}>Hitung</Text>
      
      </TouchableOpacity> 

  {/* RUMUS BERBAGAI MACAM BANGUN */}
  <Text style={tampilan.textSatu}>PERSEGI</Text>
        <Text style={tampilan.textDua}>Luas Persegi </Text>
        <Text style={tampilan.textDua}>L = s x s  =  s2</Text>
        <Text style={tampilan.textDua}>Masukkan Sisi Persegi</Text>
        <TextInput
          placeholder='Masukkan sisi persegi'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.sisiPersegi1.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({sisiPersegi1: value})} />
        <Text style={tampilan.textDua}>Masukkan Sisi Persegi</Text>
        <TextInput
          placeholder='Masukkan sisi persegi'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.sisiPersegi2.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({sisiPersegi2: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungLuasPersegi()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        </TouchableOpacity> 



 {/* RUMUS BERBAGAI MACAM BANGUN */}
 <Text style={tampilan.textSatu}>PERSEGI PANJANG</Text>
        <Text style={tampilan.textDua}>Luas Persegi Panjang</Text>
        <Text style={tampilan.textDua}>L  =  p x l</Text>
        <Text style={tampilan.textDua}>Masukkan Panjang</Text>
        <TextInput
          placeholder='Masukkan Panjang persegi panjang'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.panjang.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({panjang: value})} />
         <Text style={tampilan.textDua}>Masukkan Lebar Persegi Panjang</Text>
        <TextInput
          placeholder='Masukkan Lebar persegi panjang'
          placeholderTextColor={'grey'}
          keyboardType='numeric'
          value={this.state.lebar.toString()}
          style={tampilan.inputtext}
          onChangeText={(value)=>this.setState({lebar: value})} />
        <TouchableOpacity style={tampilan.button}
        onPress={()=>this.hitungLuasPersegiPanjang()} 
        >
        <Text style={tampilan.textButton}>Hitung</Text>
        </TouchableOpacity> 

      </ScrollView>
    );
  }
}

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#2F4F4F',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  inputtext: {
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#D3DEDC',
    color: '#000B49',
  },
  gambar: {
    width: 200, height: 200,
    marginTop: 10,
    marginHorizontal: 55,
    borderRadius: 100,
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headcop: {
    backgroundColor:'#FF4500',
    paddingVertical:20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textButton: {
    color:'#00FFFF',
    fontSize: 24,
  },
  textBiodata: {
    color:'#1E90FF',
    paddingVertical: 2,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 24,
    
  },
  textSatu: {
    color:'#FF4500',
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  textDua: {
    color:'#FF00FF',
    paddingLeft: 20,
    paddingTop: 4,
    fontSize: 18,
  },
  container: {
    flex:0.5,
    backgroundColor:'#F8F8FF'
  }
});
export default App;
