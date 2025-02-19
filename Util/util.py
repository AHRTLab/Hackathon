


from pylsl import StreamInlet
import pandas as pd
from pandas import Timestamp
from datetime import datetime


def obtain_stream_channel_names(stream):
    header = []
    inlet = StreamInlet(stream)
    info = inlet.info()
    ch = info.desc().child("channels").child("channel")
    for k in range(info.channel_count()):
        #print("  " + ch.child_value("label"))
        header.append(ch.child_value("label"))
        ch = ch.next_sibling()
    return header


def format_data_into_dataframe(samples, timestamps, header):
    if len(header) > 0:
        df = pd.DataFrame(columns=header)
    else:
        df = pd.DataFrame()
    for sample, timestamp in zip(samples, timestamps):
        converted_time = datetime.fromtimestamp(timestamp)
        current_time = Timestamp(0).now()
        sample.append(converted_time)
        df.at[current_time] = sample
    return df


