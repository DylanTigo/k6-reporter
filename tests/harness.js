import { htmlReport } from '../dist/bundle.js'
import fs from 'fs'
import path from 'path'

const theme = 'default'

const testDataFile = `tests/data/${process.argv[2] || 'simple.json'}`
console.log(`📂 Reading test data from: ${testDataFile}`)

// Read the test data from the file
const testData = JSON.parse(fs.readFileSync(path.resolve(testDataFile)), 'utf8')
const testData2 = {
  "metrics": {
    "http_req_duration{expected_response:true}": {
      "type": "trend",
      "contains": "time",
      "description": "",
      "values": {
        "avg": 807.21857,
        "min": 471.518397,
        "med": 906.982799,
        "max": 1043.154514,
        "p(90)": 1015.9201710000001,
        "p(95)": 1029.5373425
      }
    },
    "http_req_blocked": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(90)": 530.3920238000001,
        "p(95)": 596.6897444,
        "avg": 221.00237066666668,
        "min": 0.009388,
        "med": 0.010259,
        "max": 662.987465
      },
      "description": ""
    },
    "ingress_bytes": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 11168,
        "rate": 1746.9309089376125
      },
      "description": "Octets reçus (download)"
    },
    "data_received": {
      "description": "",
      "type": "counter",
      "contains": "data",
      "values": {
        "count": 16588,
        "rate": 2594.743008368295
      }
    },
    "iterations": {
      "description": "",
      "values": {
        "rate": 0.1564228965739266,
        "count": 1
      },
      "type": "counter",
      "contains": "default"
    },
    "iteration_duration": {
      "values": {
        "med": 6392.752192,
        "max": 6392.752192,
        "p(90)": 6392.752192,
        "p(95)": 6392.752192,
        "avg": 6392.752192,
        "min": 6392.752192
      },
      "type": "trend",
      "contains": "time",
      "description": ""
    },
    "error_rate": {
      "type": "rate",
      "contains": "default",
      "values": {
        "passes": 0,
        "fails": 3,
        "rate": 0
      },
      "description": "Taux d'erreurs des requêtes HTTP"
    },
    "vus": {
      "type": "gauge",
      "description": "",
      "contains": "default",
      "values": {
        "max": 1,
        "value": 1,
        "min": 1
      }
    },
    "request_count": {
      "contains": "default",
      "values": {
        "count": 3,
        "rate": 0.4692686897217799
      },
      "type": "counter",
      "description": "Nombre total de requêtes"
    },
    "request_duration": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 807.21857,
        "min": 471.518397,
        "med": 906.982799,
        "max": 1043.154514,
        "p(90)": 1015.9201710000001,
        "p(95)": 1029.5373425
      },
      "description": "Durée totale de la requête"
    },
    "http_req_receiving": {
      "description": "",
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 3.380626,
        "min": 0.140938,
        "med": 3.876472,
        "max": 6.124468,
        "p(90)": 5.6748688000000005,
        "p(95)": 5.8996683999999995
      }
    },
    "egress_bytes": {
      "type": "counter",
      "contains": "default",
      "values": {
        "rate": 15.329443864244809,
        "count": 98
      },
      "description": "Octets envoyés (upload)"
    },
    "vus_max": {
      "type": "gauge",
      "contains": "default",
      "values": {
        "value": 1,
        "min": 1,
        "max": 1
      },
      "description": ""
    },
    "http_req_duration": {
      "contains": "time",
      "values": {
        "max": 1043.154514,
        "p(90)": 1015.9201710000001,
        "p(95)": 1029.5373425,
        "avg": 807.21857,
        "min": 471.518397,
        "med": 906.982799
      },
      "type": "trend",
      "description": "Temps total des requêtes HTTP (ms)"
    },
    "http_req_connecting": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 81.24058366666667,
        "min": 0,
        "med": 0,
        "max": 243.721751,
        "p(90)": 194.97740080000003,
        "p(95)": 219.3495759
      },
      "description": ""
    },
    "http_req_sending": {
      "description": "",
      "values": {
        "med": 0.048593,
        "max": 0.092727,
        "p(90)": 0.08390020000000001,
        "p(95)": 0.08831359999999999,
        "avg": 0.059417,
        "min": 0.036931
      },
      "type": "trend",
      "contains": "time"
    },
    "http_reqs": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 3,
        "rate": 0.4692686897217799
      },
      "description": ""
    },
    "http_req_waiting": {
      "contains": "time",
      "values": {
        "avg": 803.7785269999999,
        "min": 467.593332,
        "med": 906.80493,
        "max": 1036.937319,
        "p(90)": 1010.9108411999999,
        "p(95)": 1023.9240800999999
      },
      "description": "Temps d'attente du serveur (TTFB)",
      "type": "trend"
    },
    "ttfb": {
      "values": {
        "avg": 803.7785269999999,
        "min": 467.593332,
        "med": 906.80493,
        "max": 1036.937319,
        "p(90)": 1010.9108411999999,
        "p(95)": 1023.9240800999999
      },
      "description": "Temps jusqu'au premier octet",
      "type": "trend",
      "contains": "time"
    },
    "http_req_tls_handshaking": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 83.59837333333333,
        "min": 0,
        "med": 0,
        "max": 250.79512,
        "p(90)": 200.636096,
        "p(95)": 225.71560799999997
      },
      "description": ""
    },
    "data_sent": {
      "description": "",
      "type": "counter",
      "contains": "data",
      "values": {
        "count": 2407,
        "rate": 376.5099120534414
      }
    },
    "checks": {
      "values": {
        "passes": 3,
        "fails": 0,
        "rate": 1
      },
      "type": "rate",
      "contains": "default",
      "description": "Résultat des checks fonctionnels"
    },
    "http_req_failed": {
      "description": "Pourcentage de requêtes en échec",
      "contains": "default",
      "values": {
        "rate": 0,
        "passes": 0,
        "fails": 3
      },
      "type": "rate"
    }
  }
}

// Generate the HTML report
try {
  const report = htmlReport(testData, { debug: false, theme })

  // You can either display the report in the console
  console.log('✅ HTML Report generated successfully')

  // Or write it to a file for inspection
  fs.writeFileSync('./tests/test.html', report)
  console.log('📃 Report written to ./tests/test.html')
} catch (error) {
  console.error('❌ Error generating report:', error)
}
