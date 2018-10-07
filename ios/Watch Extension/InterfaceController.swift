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
    var sample: String = "sweet dreams are made of these";
  
    @IBOutlet weak var sampleLabel: WKInterfaceLabel!
    @IBOutlet weak var generatedLabel: WKInterfaceLabel!
  
    @IBAction func inputSampleButtonTapped() {
      // handle when the input button is tapped by opening the input view
      self.presentTextInputController(withSuggestions: ["What is love?"], allowedInputMode: WKTextInputMode.plain, completion: {(results) -> Void in
          self.sample = results?[0] as! String
          self.sampleLabel.setText(self.sample)
        })
    }
  
    @IBAction func generateButtonTapped() {
      // handle when the generate button is tapped by sending a message to the phone
      self.session?.sendMessage(["action": "generate", "sample": self.sample], replyHandler: { (dict) in
        print("action recieved")
      }, errorHandler: nil)
    }
  
  var session: WCSession?
  
  // handles when this controller is started
  override func awake(withContext context: Any?) {
    super.awake(withContext: context)
    
    // check if watch connectivity is supported
    // creates the session, delegate, and activates it
    if WCSession.isSupported() {
      self.session = WCSession.default
      self.session?.delegate = self
      self.session?.activate()
    }
  }
  
  // handles incoming messages from phone
  func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
    // parses the message into lyrics, then sets the
    let lyrics = message["lyrics"] as! String
    self.generatedLabel.setText(lyrics)
  }
  
  // required for delegate signature
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
    
  }
}
