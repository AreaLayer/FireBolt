import UIKit

class MainViewController: UIViewController {
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var button: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func buttonTapped(_ sender: UIButton) {
        titleLabel.text = "Button Tapped!"
    }
}

