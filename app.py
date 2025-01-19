from flask import Flask, render_template, request, jsonify
import math

app = Flask(__name__)

def distribusi_poisson(lmbda, k):
    return round((lmbda**k * math.exp(-lmbda)) / math.factorial(k), 4)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hitung', methods=['POST'])
def hitung():
    lmbda = float(request.form['lambda'])
    k = int(request.form['k'])
    tepat = distribusi_poisson(lmbda, k)
    kurang_dari = round(sum(distribusi_poisson(lmbda, i) for i in range(k)), 4)
    paling_banyak = round(kurang_dari + tepat, 4)
    lebih_dari = round(1 - paling_banyak, 4)
    setidaknya = round(1 - kurang_dari, 4)
    
    hasil_probabilitas = {
        'tepat': tepat,
        'kurang_dari': kurang_dari,
        'paling_banyak': paling_banyak,
        'lebih_dari': lebih_dari,
        'setidaknya': setidaknya,
    }
    
    return jsonify(hasil_probabilitas)

if __name__ == '__main__':
    app.run(debug=True)
