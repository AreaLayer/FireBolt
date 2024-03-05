import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import com.yourpackagename.coinjointest.CoinjoinService

class MainActivity : AppCompatActivity() {
    private val coinjoinService = CoinjoinService()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        GlobalScope.launch {
            val transactions = coinjoinService.getCoinjoinTransactions()
            // Update UI with transactions
        }

        findViewById<Button>(R.id.createTransactionButton).setOnClickListener {
            GlobalScope.launch {
                coinjoinService.createCoinjoinTransaction(0.1) // Example amount
            }
        }
    }
}

