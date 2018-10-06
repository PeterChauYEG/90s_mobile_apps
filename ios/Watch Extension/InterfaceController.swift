//
//  InterfaceController.swift
//  Watch Extension
//
//  Created by Laptop on 2018-10-06.
//  Copyright © 2018 Facebook. All rights reserved.
//

import WatchKit
import Foundation
import WatchConnectivity

class InterfaceController: WKInterfaceController, WCSessionDelegate {
    @IBOutlet weak var generatedLabel: WKInterfaceLabel!
    @IBAction func generateButtonTapped() {
        print("test");
    }
  
  var session: WCSession?
  
  override func awake(withContext context: Any?) {
    super.awake(withContext: context)
    if WCSession.isSupported() {
      print("activating watch session")
      self.session = WCSession.default
      self.session?.delegate = self
      self.session?.activate()
    }
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
    print("watch received message", message);
  }
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    
  }
}
