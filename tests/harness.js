import { htmlReport } from '../dist/bundle.js'
import fs from 'fs'
import path from 'path'

const theme = 'default'

const testDataFile = `tests/data/${process.argv[2] || 'simple.json'}`

// Read the test data from the file
const testData = JSON.parse(fs.readFileSync(path.resolve(testDataFile)), 'utf8')
const testData2 = {
  "options": {
    "summaryTrendStats": [
      "avg",
      "min",
      "med",
      "max",
      "p(90)",
      "p(95)"
    ],
    "summaryTimeUnit": "",
    "noColor": false
  },
  "state": {
    "isStdOutTTY": true,
    "isStdErrTTY": true,
    "testRunDurationMs": 6526.626798
  },
  "metrics": {
    "http_req_failed": {
      "values": {
        "rate": 0,
        "passes": 0,
        "fails": 3
      },
      "description": "Taux d'échec des requêtes HTTP",
      "type": "rate",
      "contains": "default"
    },
    "http_req_duration": {
      "type": "trend",
      "contains": "time",
      "description": "Durée totale de la requête HTTP (envoi + attente + réception)",
      "values": {
        "min": 761.138509,
        "med": 940.520141,
        "max": 996.557939,
        "p(90)": 985.3503794000001,
        "p(95)": 990.9541592,
        "avg": 899.4055296666667
      }
    },
    "http_req_sending": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(90)": 0.08578780000000001,
        "p(95)": 0.09298189999999999,
        "avg": 0.05198466666666667,
        "min": 0.027543,
        "med": 0.028235,
        "max": 0.100176
      },
      "description": "Temps d'envoi des données au serveur"
    },
    "request_count": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 3,
        "rate": 0.4596555146862865
      },
      "description": "Nombre total de requêtes"
    },
    "http_req_waiting": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(95)": 987.8977305,
        "avg": 898.1594896666666,
        "min": 760.890188,
        "med": 940.414653,
        "max": 993.173628,
        "p(90)": 982.621833
      },
      "description": "Temps d'attente de la première réponse du serveur (TTFB)"
    },
    "http_req_tls_handshaking": {
      "type": "trend",
      "contains": "time",
      "values": {
        "avg": 83.89034933333333,
        "min": 0,
        "med": 0,
        "max": 251.671048,
        "p(90)": 201.33683840000003,
        "p(95)": 226.50394319999998
      },
      "description": "Temps pour le handshake TLS/SSL"
    },
    "iterations": {
      "description": "Nombre total d'itérations de la fonction default",
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 1,
        "rate": 0.15321850489542885
      }
    },
    "http_req_duration{expected_response:true}": {
      "type": "trend",
      "contains": "time",
      "values": {
        "max": 996.557939,
        "p(90)": 985.3503794000001,
        "p(95)": 990.9541592,
        "avg": 899.4055296666667,
        "min": 761.138509,
        "med": 940.520141
      },
      "description": ""
    },
    "ingress_bytes": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 11168,
        "rate": 1711.1442626721494
      },
      "description": "Octets reçus (download)"
    },
    "vus_max": {
      "type": "gauge",
      "contains": "default",
      "description": "Nombre maximum d'utilisateurs virtuels",
      "values": {
        "max": 1,
        "value": 1,
        "min": 1
      }
    },
    "http_req_blocked": {
      "values": {
        "max": 522.583772,
        "p(90)": 418.0686625999999,
        "p(95)": 470.3262172999999,
        "avg": 174.19996333333333,
        "min": 0.007893,
        "med": 0.008225
      },
      "description": "Temps bloqué avant l'initiation de la requête",
      "type": "trend",
      "contains": "time"
    },
    "data_sent": {
      "type": "counter",
      "contains": "data",
      "values": {
        "count": 2407,
        "rate": 368.7969412832972
      },
      "description": "Volume de données envoyées"
    },
    "iteration_duration": {
      "contains": "time",
      "values": {
        "avg": 6526.536004,
        "min": 6526.536004,
        "med": 6526.536004,
        "max": 6526.536004,
        "p(90)": 6526.536004,
        "p(95)": 6526.536004
      },
      "type": "trend",
      "description": "Temps pour compléter une itération complète"
    },
    "ttfb": {
      "contains": "time",
      "values": {
        "min": 760.890188,
        "med": 940.414653,
        "max": 993.173628,
        "p(90)": 982.621833,
        "p(95)": 987.8977305,
        "avg": 898.1594896666666
      },
      "description": "Temps jusqu'au premier octet",
      "type": "trend"
    },
    "checks": {
      "type": "rate",
      "contains": "default",
      "values": {
        "rate": 1,
        "passes": 3,
        "fails": 0
      },
      "description": "Vérifications effectuées pendant le test"
    },
    "http_req_receiving": {
      "type": "trend",
      "contains": "time",
      "values": {
        "min": 0.077945,
        "med": 0.220086,
        "max": 3.284135,
        "p(90)": 2.6713252,
        "p(95)": 2.9777300999999996,
        "avg": 1.1940553333333335
      },
      "description": "Temps de réception de la réponse"
    },
    "request_duration": {
      "type": "trend",
      "contains": "time",
      "values": {
        "p(90)": 985.3503794000001,
        "p(95)": 990.9541592,
        "avg": 899.4055296666667,
        "min": 761.138509,
        "med": 940.520141,
        "max": 996.557939
      },
      "description": "Durée totale de la requête"
    },
    "error_rate": {
      "type": "rate",
      "contains": "default",
      "values": {
        "rate": 0,
        "passes": 0,
        "fails": 3
      },
      "description": "Taux d'erreurs des requêtes HTTP"
    },
    "http_reqs": {
      "type": "counter",
      "contains": "default",
      "values": {
        "count": 3,
        "rate": 0.4596555146862865
      },
      "description": "Nombre total de requêtes HTTP générées"
    },
    "data_received": {
      "type": "counter",
      "contains": "data",
      "values": {
        "count": 16587,
        "rate": 2541.4353407004783
      },
      "description": "Volume de données reçues"
    },
    "vus": {
      "type": "gauge",
      "contains": "default",
      "values": {
        "value": 1,
        "min": 1,
        "max": 1
      },
      "description": "Nombre d'utilisateurs virtuels actifs"
    },
    "http_req_connecting": {
      "values": {
        "avg": 76.60826366666667,
        "min": 0,
        "med": 0,
        "max": 229.824791,
        "p(90)": 183.85983280000002,
        "p(95)": 206.84231189999997
      },
      "description": "Temps pour établir la connexion TCP",
      "type": "trend",
      "contains": "time"
    },
    "egress_bytes": {
      "values": {
        "count": 98,
        "rate": 15.015413479752027
      },
      "description": "Octets envoyés (upload)",
      "type": "counter",
      "contains": "default"
    }
  },
  "root_group": {
    "name": "",
    "path": "",
    "id": "d41d8cd98f00b204e9800998ecf8427e",
    "groups": [],
    "checks": [
        {
          "fails": 0,
          "name": "POST OK",
          "path": "::POST OK",
          "id": "046baf4fb423e68554a4d5b539df6d79",
          "passes": 1
        },
        {
          "path": "::GET OK",
          "id": "93c1b0a066a35c0229d749305090e14b",
          "passes": 1,
          "fails": 0,
          "name": "GET OK"
        },
        {
          "name": "DELETE OK",
          "path": "::DELETE OK",
          "id": "124694847017c1d9d65d563fb9ce7fed",
          "passes": 1,
          "fails": 0
        }
      ]
  }
}

// Generate the HTML report
try {
  const report = htmlReport(testData2, { debug: false, theme })

  // You can either display the report in the console
  console.log('✅ HTML Report generated successfully')

  // Or write it to a file for inspection
  fs.writeFileSync('./tests/test.html', report)
  console.log('📃 Report written to ./tests/test.html')
} catch (error) {
  console.error('❌ Error generating report:', error)
}
