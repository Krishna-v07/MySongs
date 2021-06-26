import React,{useState} from 'react';
import { Text, View ,StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Progress from 'react-native-progress';

const webView = () => {

    const [progress, setProgress] = useState(0);
    const [isLoaded, setLoaded] = useState(false);

    return (

        <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {
                !isLoaded ?
                    <Progress.Bar
                        progress={progress}
                        width={null}
                        borderWidth={0}
                        borderRadius={0}
                        color='#ff8300'
                    /> : null
            }

            <WebView source={{ uri: 'https://gaana.com/' }} 
                onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
                onLoadEnd={() => setLoaded(true)}
            />

        </>

    )
}

export default webView;