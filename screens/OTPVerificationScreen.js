import React, { Suspense, lazy } from "react";
import { View, Button, ImageBackground } from "react-native";
const VerifyOTPComponent = lazy(() =>
  import("../main/containers/Pages//UserAuth/VerifyOTP/VerifyOTP")
);

export class VerifyOTPScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Suspense fallback={<View></View>}>
          <VerifyOTPComponent />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default VerifyOTPScreen;
