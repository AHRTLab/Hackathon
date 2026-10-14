> **Legacy event (Myo + LSL data collection).** Moved here from the repo root when this repo became
> the multi-event Hackathon repo. Run everything from *inside this folder* (`cd events/myo-lsl-legacy`),
> because `main.py` reads `config.ini` and `run.cmd` uses paths relative to the current directory.

# Myo Data Collection using LabStream

Prerequisites
============
- **Every Platform:** make sure that you have Miniconda or Conda installed and that the
  `conda` command-line interface is on your path

Config File
============

config.ini contains the following parameters:

### File info
These parameters set-up the file save directory for the .csv files. You should only have to change the directory information.

# Checking if Myo is working

On windows, please go to the Myo/Thalmic Labs/Myo Connect and run the Myo Connect.exe

On Mac, please install myoconnect via MyoConnect.dmg

Follow the on-screen instructions for using the Myo


# Installing and Running the Code
==================

- **Windows:** Invoke the script `run.cmd`, which will, if necessary, create a fresh Python 
  environment and install the necessary dependencies into it
- **Linux/MacOS:** Not yet supported
- **Alternative manual install:** you can also follow the instructions in 
  `conda-environment.yml` to install a Python environment yourself or to add the
  necessary requirements to an existing environment, and then you can use that
  interpreter to run `main.py`

- Run main.py for data collection
- myo/myo_data_collection.py is also useful to run/interact with
